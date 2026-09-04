import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center fade-in">
      <div className="container-content text-center max-w-2xl px-4 py-16">
        <div className="flex justify-center mb-6">
          <div className="bg-warm-gray p-4 rounded-full border border-border">
            <FileQuestion className="w-12 h-12 text-copper" />
          </div>
        </div>
        
        <h1 className="text-display-sm font-serif text-ink mb-4">Page not found</h1>
        
        <p className="text-body text-charcoal mb-10 max-w-md mx-auto">
          The page you are looking for may have been moved, removed, or does not exist.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="px-6 py-3 bg-ink text-paper rounded font-medium hover:bg-deep-navy transition-colors w-full sm:w-auto"
          >
            Home
          </Link>
          <Link 
            href="/what-we-cover"
            className="px-6 py-3 bg-paper text-ink border border-border rounded font-medium hover:bg-warm-gray transition-colors w-full sm:w-auto"
          >
            What We Cover
          </Link>
          <Link 
            href="/insights"
            className="px-6 py-3 bg-paper text-ink border border-border rounded font-medium hover:bg-warm-gray transition-colors w-full sm:w-auto"
          >
            Insights
          </Link>
        </div>
      </div>
    </main>
  );
}
