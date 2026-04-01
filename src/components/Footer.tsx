import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Island Greenhouse Sales</h3>
            <p className="text-sm text-white/60 mb-3">
              #1 Planta Greenhouse dealer in Canada. Authorized dealer since 2021. Serving Vancouver Island and all of BC.
            </p>
            <p className="text-sm text-white/60">
              Delivered to over 80 cities and communities in BC.
            </p>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Island-Greenhouse-Sales/61552001641458/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-white/50 hover:text-forest-light transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/greenhouses" className="text-sm hover:text-forest-light transition-colors">Greenhouses</Link></li>
              <li><Link href="/greenhouses?series=sungrow" className="text-sm hover:text-forest-light transition-colors">Sungrow Series</Link></li>
              <li><Link href="/greenhouses?series=sigma" className="text-sm hover:text-forest-light transition-colors">Sigma Series</Link></li>
              <li><Link href="/greenhouses?series=commercial" className="text-sm hover:text-forest-light transition-colors">Commercial</Link></li>
              <li><Link href="/accessories" className="text-sm hover:text-forest-light transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm hover:text-forest-light transition-colors">Services</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-forest-light transition-colors">Shipping</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-forest-light transition-colors">FAQ</Link></li>
              <li><Link href="/reviews" className="text-sm hover:text-forest-light transition-colors">Reviews</Link></li>
              <li><Link href="/about" className="text-sm hover:text-forest-light transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+12507405110" className="text-sm hover:text-forest-light transition-colors">
                  (250) 740-5110
                </a>
              </li>
              <li>
                <a href="mailto:info@islandgreenhousesales.ca" className="text-sm hover:text-forest-light transition-colors">
                  info@islandgreenhousesales.ca
                </a>
              </li>
              <li className="text-sm text-white/60">Nanaimo, BC</li>
              <li className="text-sm text-white/60">By appointment only</li>
            </ul>
            <p className="mt-3 text-xs text-white/40">
              Pickup locations: Nanaimo, Victoria &amp; Delta
            </p>
            <Link
              href="/contact"
              className="inline-block mt-3 rounded-lg bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-forest-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Island Greenhouse Sales. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
