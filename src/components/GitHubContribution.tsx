'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
  year: number;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionWeek[];
}

const LEVEL_COLORS = ['#ebe8e3', '#d6d3d1', '#a8a29e', '#78716c', '#44403c'];

export default function GitHubContribution() {
  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = 'daddymaou';

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.kawarimidoll.deno.net/${username}`
        );
        if (!res.ok) {
          setError('Failed to load contribution data');
          return;
        }
        const contributionData: ContributionsResponse = await res.json();
        setData(contributionData);
      } catch {
        setError('Failed to fetch contribution data');
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-8 text-stone-400">Loading contribution graph...</div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-8 text-stone-400">
        Unable to load contribution graph
      </div>
    );
  }

  const total = Object.values(data.total).reduce((sum, n) => sum + n, 0);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-mono text-stone-500 uppercase tracking-widest">GitHub</h3>
        <span className="text-sm text-stone-400">
          @{username} &middot; {total.toLocaleString()} contributions
        </span>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {data.contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.days.map((day) => (
                <div
                  key={day.date}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                  }}
                  title={`${day.date}: ${day.count} contribution(s)`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
