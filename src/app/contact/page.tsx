import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '@/components/SiteNav';

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-mono text-gold-600 uppercase tracking-widest mb-3">Contact</p>
        <h1 className="text-4xl md:text-5xl font-display">Let's talk</h1>
        <p className="mt-4 text-stone-600 text-lg">
          For thoughtful projects, collaboration, or a good conversation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-display mb-6">Get in touch</h2>
          <div className="space-y-4">
            <a href="mailto:daddymaouu@gmail.com" className="inline-flex items-center gap-3 text-stone-700 hover:text-stone-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              daddymaouu@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-display mb-6">Follow me</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'GitHub', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z' },
              { label: 'Twitter', icon: 'M4 4l11 16 11-16H4zm6 13h6m-3-6h6m-6 12h6' },
              { label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
            ].map((res) => (
              <a
                key={res.label}
                href="https://github.com/daddymaou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={res.icon} />
                </svg>
                <span className="text-sm font-medium">{res.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
