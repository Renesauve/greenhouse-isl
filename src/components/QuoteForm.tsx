"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/30 mb-4">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">Quote Request Sent!</h3>
        <p className="text-white/70">
          We&apos;ll get back to you within 24 hours with a personalized quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/15 space-y-4"
    >
      <h3 className="font-serif text-lg font-semibold text-white mb-1">Tell us what you need</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-sage/50 focus:ring-1 focus:ring-sage/50 outline-none transition-colors"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-sage/50 focus:ring-1 focus:ring-sage/50 outline-none transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-sage/50 focus:ring-1 focus:ring-sage/50 outline-none transition-colors"
        />
        <select
          name="interest"
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/60 focus:border-sage/50 focus:ring-1 focus:ring-sage/50 outline-none transition-colors"
        >
          <option value="" className="text-charcoal">Select Greenhouse</option>
          <option value="sungrow" className="text-charcoal">Sungrow Series</option>
          <option value="sigma" className="text-charcoal">Sigma Series</option>
          <option value="commercial" className="text-charcoal">Commercial</option>
          <option value="accessories" className="text-charcoal">Accessories</option>
          <option value="other" className="text-charcoal">Not sure yet</option>
        </select>
      </div>
      <textarea
        name="message"
        rows={3}
        placeholder="Tell us about your space, what you'd like to grow..."
        className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-sage/50 focus:ring-1 focus:ring-sage/50 outline-none transition-colors resize-y"
      />
      <button
        type="submit"
        className="w-full sm:w-auto rounded-lg bg-amber px-8 py-3 text-base font-semibold text-white hover:bg-amber-dark transition-colors shadow-md cursor-pointer"
      >
        Request Free Quote
      </button>
    </form>
  );
}
