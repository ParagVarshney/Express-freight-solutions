import React from "react";
import {
  ShoppingBag,
  Factory,
  Stethoscope,
  Laptop,
  Leaf,
} from "lucide-react";

const industries = [
  {
    title: "Retail & E-Commerce",
    desc: "Fast, reliable delivery solutions designed for online businesses and retailers.",
    icon: ShoppingBag,
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Manufacturing",
    desc: "Efficient transport for raw materials and finished goods to keep production running smoothly.",
    icon: Factory,
    img: "https://www.miquido.com/wp-content/uploads/2024/12/header-What-is-Modern-Manufacturing-A-Guide-for-Business-Leaders-700x467.jpg",
  },
  {
    title: "Healthcare",
    desc: "Temperature-controlled logistics for sensitive medical supplies and pharmaceuticals.",
    icon: Stethoscope,
    img: "https://www.idfy.com/wp-content/uploads/2021/05/Healthcare-BGV-scaled.jpg",
  },
  {
    title: "Technology",
    desc: "Secure, reliable handling and transport for high-value electronics and components.",
    icon: Laptop,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Agriculture",
    desc: "Specialized cold chain and logistics solutions for fresh and perishable goods.",
    icon: Leaf,
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=60",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Industries We Serve
        </h2>
        <p className="text-lg text-gray-600">
          Tailored logistics solutions for diverse industries worldwide.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Background Image */}
            <img
              src={industry.img}
              alt={industry.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 text-white">
              <industry.icon className="h-8 w-8 mb-2 text-blue-400" />
              <h3 className="text-xl font-semibold">{industry.title}</h3>
              <p className="text-sm mt-1 text-gray-200 max-w-xs">
                {industry.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;

