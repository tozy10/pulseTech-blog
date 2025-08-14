export default function ContactUs() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Whether you have a question about a product, a partnership, or anything else, our team is ready to help.
            </p>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-blue-600">ernest@pulsetech.co.zw</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-blue-600">+263 784 525 565</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Location</h2>
              <p className="text-gray-600">123 Innovation Drive, Harare, Zimbabwe</p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
