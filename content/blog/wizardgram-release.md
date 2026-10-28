---
title: "I built a Telegram bot framework"
description: "wizardgram is an async Telegram bot framework for Python. Here's what's in it, what isn't, and why I'm shipping it at alpha."
category: professional
date: 2026-10-03
---

I released a project this week. It's called **wizardgram**, it's an async Telegram bot framework for Python, and version `0.1.0` is live on PyPI.

```bash
pip install wizardgram
```

This post is the honest version of the launch: what it does, what it doesn't do yet, and why I put it out while it's still rough.

## Why

I've built multiple Telegram bots by now, and every one of them started with the same boilerplate: polling loop, routing, retries, a way to hold state across messages.

## What it looks like

This is the smallest bot you can write:

```python
import os

import wizardgram

bot = wizardgram.Bot(token=os.environ["WIZARDGRAM_TOKEN"])


@bot.command("start")
async def start(ctx: wizardgram.Context) -> None:
    await ctx.reply("Hello!")


if __name__ == "__main__":
    bot.run()
```

Every handler is a plain `async def` that gets a `Context`. Besides `command`, there's `hears` (match message text with a regex), `action` (match inline button data), and `on` (any Telegram update type).

## The part I care about most: **middleware**

Everything in wizardgram is middleware. Routing is middleware. Scenes are middleware. Your logging and rate limiting are middleware. They all compose the same way:

```python
@bot.middleware
async def log_updates(ctx, next_):
    print(ctx.update_type)
    await next_()
```

Do work before `next_()`, after it, or skip it to stop the update. If a middleware throws, it's logged and the chain keeps going, so one bad piece doesn't kill the bot.

## Scenes for multi-step flows

Signups, forms, onboarding: anything where you need to remember where a user is in a conversation. You write each step as a handler, and a `Stage` tracks which step each chat is on:

```python
from wizardgram import Scene, Stage

stage = Stage([Scene("signup", [ask_name, finish])])
bot.use(stage.middleware())
```

One limitation, because I'd rather say it here than have you find it later: scene state lives in memory. Restart your bot and users lose their progress. A persistent store is the first thing I want to fix.

## Testing without the network

This is the feature I'd have wanted on my first bot. `TestBot` records outgoing API calls and never touches the network, so you can test handlers like normal functions:

```python
from wizardgram import TestBot, Updates

async def test_hello():
    bot = TestBot()

    @bot.command("hello")
    async def hello(ctx):
        await ctx.reply("world")

    reply = await bot.simulate(Updates.command("hello"))
    assert reply.text == "world"
```

## The small things

- Flood control: on a 429, the transport waits the `retry_after` Telegram sends and retries.
- Per-chat throttling with `min_interval_ms`, if you want to stay well under the limits.
- Polling that backs off instead of hammering Telegram after an error.
- Keyboards through a fluent builder, webhooks through `handle_webhook()`, and file uploads through `ctx.reply_with_photo()`.
- Type hints throughout, checked with `mypy --strict`.

## What "alpha" actually means

wizardgram ships with a table of the Bot API methods it tracks and how each one was checked. Right now that's 34 methods, all marked verified. That is **not** the whole Bot API. If you need a method that isn't covered, it isn't there yet.

Alpha also means the API can still change, scene state isn't persistent, and I expect people to find rough edges. That's the point of shipping it.

## Try it, break it

If you build something with it, I'd love to see it. If it breaks, open an issue. If something's missing, tell me what you needed. And if you like it, a star on the repo helps other people find it.

- Repo: [github.com/daddymaou/wizardgram](https://github.com/daddymaou/wizardgram)
- PyPI: [pypi.org/project/wizardgram](https://pypi.org/project/wizardgram/)

That's all for now, i'll keep y'all updated
