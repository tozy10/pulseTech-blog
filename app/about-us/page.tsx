export default function AboutUs() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-600 mb-10 text-center">
          At PulseTech, we are driven by a passion for innovation and quality. From the start,
          our mission has been to deliver technology products that improve everyday life —
          efficiently, beautifully, and sustainably.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide reliable, modern, and affordable tech solutions that empower
              people and businesses across Africa and beyond.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation and Excellence</li>
              <li>Customer Satisfaction</li>
              <li>Integrity and Transparency</li>
              <li>Community and Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
