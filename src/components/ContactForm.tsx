"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl bg-forest/5 border border-forest/20 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-forest mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-bold text-charcoal mb-2">Message Sent!</h3>
        <p className="text-charcoal/60">
          Thank you for your interest. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // In production, integrate with Formspree or similar
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white text-charcoal focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white text-charcoal focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
          Phone <span className="text-charcoal/40">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white text-charcoal focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
          placeholder="(250) 555-0123"
        />
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-charcoal mb-1">
          Interested In
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white text-charcoal focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors"
        >
          <option value="">Select a product (optional)</option>
          <option value="sungrow-compact">Sungrow Compact</option>
          <option value="sungrow-urban">Sungrow Urban</option>
          <option value="sungrow-20">Sungrow 20</option>
          <option value="sungrow-26">Sungrow 26</option>
          <option value="sungrow-32">Sungrow 32</option>
          <option value="sigma-urban">Sigma Urban</option>
          <option value="sigma-20">Sigma 20</option>
          <option value="sigma-26">Sigma 26</option>
          <option value="sigma-32">Sigma 32</option>
          <option value="accessories">Accessories</option>
          <option value="other">Other / General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white text-charcoal focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors resize-y"
          placeholder="Tell us about your greenhouse needs..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-forest px-6 py-3 text-base font-semibold text-white hover:bg-forest-dark transition-colors shadow-sm"
      >
        Send Message
      </button>
    </form>
  );
}
