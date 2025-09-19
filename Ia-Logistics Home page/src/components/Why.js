import React from "react";
import {
  Zap,
  Globe,
  MonitorSmartphone,
  Leaf,
  Settings,
  Smile,
  Truck,
  Heart,
} from "lucide-react";

const Why = () => {
  return (
    <section id="why" className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600">
          Discover what sets Express Freight Solutions apart in the world of logistics.
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Key Features
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Speed You Can Trust",
              desc: "Express delivery options with guaranteed timelines keep your business moving forward.",
            },
            {
              icon: Globe,
              title: "Worldwide Coverage",
              desc: "Global network + local expertise ensures reliable service anywhere in the world.",
            },
            {
              icon: MonitorSmartphone,
              title: "Cutting-Edge Technology",
              desc: "Real-time tracking, automated notifications, and full shipment visibility.",
            },
            {
              icon: Leaf,
              title: "Eco-Friendly Options",
              desc: "Sustainable solutions, including carbon-neutral shipping and green packaging.",
            },
            {
              icon: Settings,
              title: "Tailored Solutions",
              desc: "Customized plans and competitive pricing designed to meet your unique needs.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <f.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Advantage */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Technology Advantage
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We leverage advanced technology to enhance every aspect of logistics.
            From booking shipments and tracking deliveries to accessing detailed
            reports in real time, our platform makes logistics simple and efficient.
            IoT integration ensures accurate monitoring of sensitive goods, while
            automated alerts keep you informed at every step.
          </p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKeFO88UDWjCPyJGxCUyzgv4o5X0UnSrvzw&s"
          alt="Technology in logistics"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Customer Success Stories */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Customer Success Stories
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Retail Giant",
              desc: "Reduced delivery times by 30% using our air freight services, boosting customer satisfaction.",
              icon: Truck,
            },
            {
              title: "Medical Supplier",
              desc: "Ensured timely delivery of temperature-sensitive supplies with our controlled road freight.",
              icon: Heart,
            },
            {
              title: "Tech Startup",
              desc: "Scaled operations using our warehousing & distribution, enabling same-day delivery.",
              icon: Smile,
            },
          ].map((story, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col"
            >
              <story.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {story.title}
              </h4>
              <p className="text-gray-600 text-sm">{story.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability */}
      <div className="bg-green-50 rounded-2xl shadow-md p-10 text-center">
        <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Sustainability Commitment
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are dedicated to reducing environmental impact through carbon-neutral
          shipping, optimized routing, and eco-friendly packaging. Together with
          our clients, we’re building a greener future in logistics.
        </p>
      </div>
    </section>
  );
};

export default Why;

