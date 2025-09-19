import React from "react";
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  FileCheck,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Express Air Freight",
    desc: "Time-critical shipments delivered in as little as 24 hours. Ideal for high-value goods, perishables, or urgent documents with customs support included.",
    icon: Plane,
    img: "https://5.imimg.com/data5/SELLER/Default/2025/9/543833084/QC/YT/EM/185474615/air-cargo-service.jpg",
  },
  {
    title: "Global Sea Freight",
    desc: "Cost-effective, eco-conscious transport for bulk cargo. Offering both FCL and LCL with optimized routes to reduce carbon emissions.",
    icon: Ship,
    img: "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Road & Rail Freight",
    desc: "Flexible domestic and cross-border transport with modern vehicles and rail access, handling oversized and temperature-sensitive cargo.",
    icon: Truck,
    img: "https://scnafrica.com/wp-content/uploads/2023/08/Road-vs.-Railway-Freight-Transportation.webp",
  },
  {
    title: "Warehousing & Distribution",
    desc: "State-of-the-art facilities with real-time inventory tracking, pick-and-pack services, and customized distribution plans.",
    icon: Warehouse,
    img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Customs & Compliance",
    desc: "Smooth cross-border movement with customs clearance, documentation, and compliance support to minimize delays and risks.",
    icon: FileCheck,
    img: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=60",
  },
];

const MyServices = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600">
          Comprehensive freight solutions designed for speed, reliability, and flexibility.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full shadow-md">
                <service.icon className="h-6 w-6" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default MyServices;

