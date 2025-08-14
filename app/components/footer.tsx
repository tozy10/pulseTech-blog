import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">PulseTech</h2>
          <p className="text-sm text-gray-400">
            Delivering the latest in tech news, analysis, and insights to keep you informed.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/editorial-policy">Editorial Policy</Link></li>
            <li><Link href="/terms-of-use">Terms of Use</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest stories and updates straight to your inbox.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PulseTech. All rights reserved.
      </div>
    </footer>
  );
}
