'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/content/work';

export default function WorkPage() {
  return (
    <>
      <Header />
      <Projects projects={projects} />
    </>
  );
}

function Header() {
  return (
    <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="/website_image.jpeg"
        alt="Maou's header image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />
      <div className="relative z-10 text-center text-white max-w-2xl">
        <p className="text-sm font-mono uppercase tracking-widest mb-3">Work</p>
        <h1 className="text-4xl md:text-5xl font-display">Selected projects</h1>
        <p className="mt-4 text-lg text-white/90">
          A collection of things I've built and worked on.
        </p>
      </div>
    </header>
  );
}

function Projects({ projects: allProjects }: { projects: typeof projects }) {
  return (
    <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid sm:grid-cols-2 gap-6">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 cursor-default"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-display">{project.name}</h3>
          <span className="text-sm font-mono text-stone-500 mt-1 block">v. 1.0</span>
        </div>
        <div className="flex flex-col items-end gap-2 ml-4">
          <span className="text-xs font-mono text-stone-400">
            {project.details.split(' ').length > 12 ? 'expand' : 'view'}
          </span>
        </div>
      </div>

      <p className="text-stone-600 mb-4 text-sm leading-relaxed">{project.details}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-mono rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 border border-stone-300 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-50 hover:border-stone-400 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </a>
        )}
      </div>

      {expanded && (
        <div className="absolute inset-0 bg-white rounded-xl shadow-2xl border border-stone-200 z-10 overflow-hidden animate-in fade-in-0 zoom-in-95">
          <div className="p-6 h-full flex flex-col overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-lg font-display">{project.name}</h4>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                className="text-stone-400 hover:text-stone-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-stone-600 mb-4 leading-relaxed">{project.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-mono rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 border border-stone-300 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                >
                  View on GitHub
                </a>
              )}
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  Visit Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
