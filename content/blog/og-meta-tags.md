---
title: "The og meta tag, done properly"
description: "Why your link previews show up blank, and the small set of tags that fixes it."
category: professional
date: 2026-09-24
---

Having problem with og meta tag?

![Just ask Maou](https://files.catbox.moe/iyfwf6.jpg)

You've built the site. You paste the link into WhatsApp, and you get a grey box with a bare URL. Meanwhile everyone else's links show a clean card with an image and a title.

That card comes from a handful of `<meta>` tags in your `<head>`. They're called Open Graph tags (the `og:` in the name), and most people get at least one of them wrong. This post covers the ones that matter, the three mistakes that cause most broken previews, and a snippet you can copy into any page.

## What the tags do

When you share a link, the platform doesn't show your page. It fetches your HTML, reads the meta tags, and builds the card from them. If the tags are missing or wrong, it guesses, and it usually guesses badly.

## The tags you actually need

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Maou Usually Talks" />
<meta property="og:title" content="Your page title" />
<meta property="og:description" content="One or two sentences about the page." />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:image" content="https://example.com/og.jpg" />
<meta property="og:image:alt" content="Describe the image for people who can't see it" />

<meta name="twitter:card" content="summary_large_image" />
```

The `twitter:card` tag is the one people forget. Without it, X shows a small square thumbnail even when your `og:image` is perfect. Set it to `summary_large_image` and X uses the wide card. It will fall back to your `og:` tags for the title, description and image, so you don't need to repeat them.

## Mistake 1: the wrong image size

Use **1200 × 630 pixels** (roughly 1.91:1) as a JPG or PNG.

- Too small and platforms shrink it into a tiny thumbnail, or skip it.
- A different ratio gets cropped, usually from the sides and edges. Keep anything important (text, your face) in the middle.
- Keep the file small. Platforms cap the size, and WhatsApp in particular is commonly reported to skip heavy images, so aim for well under 300 KB if you can.

I'm using a high-contrast black-and-white silhouette for this blog. It compresses to a small file and stays readable even when the card is shrunk.

## Mistake 2: relative URLs

This is the most common cause of a missing image. Crawlers don't know which site a relative path belongs to, so this fails:

```html
<meta property="og:image" content="/og.jpg" />
```

And this works:

```html
<meta property="og:image" content="https://example.com/og.jpg" />
```

Always use the full `https://` address. The same goes for `og:url`.

## Mistake 3: not knowing about the cache

You fix your tags, share the link again, and still see the old preview. That's because platforms cache the first result they fetch, so changing your HTML doesn't change the card people see.

To force a refresh:

- **Facebook:** paste the URL into the Sharing Debugger and click "Scrape Again".
- **LinkedIn:** use the Post Inspector, which re-fetches the page.
- **X:** there's no validator any more. Paste the link into a new post draft and check the preview there.
- **WhatsApp:** there's no tool at all. The usual workaround is to change the image URL, for example `og.jpg?v=2`, so it counts as a new resource.

Because of the cache, **test before you share**. The first time a link goes out is the one that gets remembered.

## A snippet you can copy

Drop this into the `<head>` of any page. Change the title, description, and URLs, and you're done.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Your page title</title>
  <meta name="description" content="One or two sentences about the page." />
  <link rel="canonical" href="https://example.com/page" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Maou Usually Talks" />
  <meta property="og:title" content="Your page title" />
  <meta property="og:description" content="One or two sentences about the page." />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:image" content="https://example.com/og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Describe the image for people who can't see it" />

  <!-- X / Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
</head>
<body>
  <!-- your page -->
</body>
</html>
```

Two things to watch when you do it by hand:

**Every URL is written out in full.** `og:url`, `og:image`, and the canonical link all start with `https://`. That's mistake 2 from the top of this post, and without a framework resolving paths for you, it's the one you're most likely to slip on. Copy the block per page and change the values, rather than retyping it from scratch.

**The tags go in the `<head>`, before any content.** Crawlers read the raw HTML and some stop early. Don't push meta tags to the bottom of the body.

For a static site with a handful of pages, this is fine. If you have a blog and you're generating pages from templates, whatever you're building with can inject the title and description for you, so the values stay in sync with each page instead of drifting out of date.

## Checklist before you share

- [ ] `og:title`, `og:description`, `og:url`, `og:image` and `twitter:card` are all present
- [ ] The image is 1200 × 630, and small enough to load quickly
- [ ] Every URL is absolute and starts with `https://`
- [ ] You've checked the preview in Facebook's debugger or LinkedIn's inspector
- [ ] For WhatsApp, you've changed the image URL if you're fixing an old link

That's all it takes. Get these right once, save the snippet somewhere you'll find it, and every new page gets a proper card without extra work.
