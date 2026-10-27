'use client';

import { useEffect, useState } from 'react';

interface ContributionYear {
  totalContributions: number;
  weeks: { contributionCounts: number[]; firstDay: number }[];
}

export default function GitHubContribution() {
  const [data, setData] = useState<ContributionYear | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = 'daddymaou';

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/contributions?per_page=5`
        );
        if (!res.ok) {
          setError('Failed to load contribution data');
          setLoading(false);
          return;
        }
        const contributionData: ContributionYear = await res.json();
        setData(contributionData);
      } catch (err) {
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

  const weekBlocks = data.weeks.flatMap((week, weekIndex) => {
    const counts = week.contributionCounts;
    return counts.map((count, dayIndex) => {
      const contributionClass = count <= 0 ? '' : `bg-gold-600 ${count <= 2 ? 'opacity-50' : ''}`;
      return (
        <div
          key={`${weekIndex}-${dayIndex}`}
          className="w-5 h-5 rounded-sm"
          style={{ backgroundColor: contributionClass }}
          title={`Week ${weekIndex + 1}, Day ${dayIndex + 1}: ${count} contribution(s)`}
        />
      );
    });
  });

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-mono text-stone-500 uppercase tracking-widest">GitHub</h3>
        <span className="text-sm text-stone-400">@{username}</span>
      </div>
      <div className="flex gap-1">{weekBlocks}</div>
    </div>
  );
}
