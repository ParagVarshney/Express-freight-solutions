import React from "react";
import {
  Zap,
  Globe,
  MonitorSmartphone,
  Leaf,
  Settings,
  Truck,
  Heart,
  Smile,
} from "lucide-react";

const Why = () => {
  return (
    <section id="why" className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 lg:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Heading */}
      <div className="relative text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Discover what sets <span className="font-semibold text-blue-600">Express Freight Solutions</span> apart in the world of logistics.
        </p>
      </div>

      {/* Key Features with Images */}
      <div className="relative mb-20">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Key Features
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Zap,
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSucWm-j0F-0a_-4xmnOTswOLEf5UaCnf9Cg&s",
              title: "Speed You Can Trust",
              desc: "Express delivery options with guaranteed timelines keep your business moving forward.",
            },
            {
              icon: Globe,
              img: "https://img.freepik.com/free-vector/global-logistics-concept-illustration_114360-9643.jpg",
              title: "Worldwide Coverage",
              desc: "Global network + local expertise ensures reliable service anywhere in the world.",
            },
            {
              icon: MonitorSmartphone,
              img: "https://img.freepik.com/free-vector/isometric-smart-logistics-concept_1284-17774.jpg",
              title: "Cutting-Edge Technology",
              desc: "Real-time tracking, automated notifications, and full shipment visibility.",
            },
            {
              icon: Leaf,
              img: "https://img.freepik.com/free-vector/eco-logistics-concept-illustration_114360-8990.jpg",
              title: "Eco-Friendly Options",
              desc: "Sustainable solutions, including carbon-neutral shipping and green packaging.",
            },
            {
              icon: Settings,
              img: "https://img.freepik.com/free-vector/business-solution-concept-illustration_114360-7805.jpg",
              title: "Tailored Solutions",
              desc: "Customized plans and competitive pricing designed to meet your unique needs.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={f.img}
                alt={f.title}
                className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <f.icon className="h-10 w-10 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {f.title}
                </h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Advantage */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-3317.jpg"
          alt="Technology in logistics"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
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
      </div>

      {/* Customer Success Stories */}
      <div className="relative mb-20">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Customer Success Stories
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Retail Giant",
              desc: "Reduced delivery times by 30% using our air freight services, boosting customer satisfaction.",
              icon: Truck,
              img: "https://img.freepik.com/free-photo/delivery-man-carrying-cardboard-box-truck_23-2149149582.jpg",
            },
            {
              title: "Medical Supplier",
              desc: "Ensured timely delivery of temperature-sensitive supplies with our controlled road freight.",
              icon: Heart,
              img: "https://img.freepik.com/free-photo/medicine-boxes-shipping-concept_23-2148878952.jpg",
            },
            {
              title: "Tech Startup",
              desc: "Scaled operations using our warehousing & distribution, enabling same-day delivery.",
              icon: Smile,
              img: "https://img.freepik.com/free-vector/startup-business-concept_23-2147903075.jpg",
            },
          ].map((story, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
            >
              <img
                src={story.img}
                alt={story.title}
                className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-6 flex flex-col flex-1">
                <story.icon className="h-10 w-10 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {story.title}
                </h4>
                <p className="text-gray-600 text-sm">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability */}
      <div className="relative bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md p-12 text-center">
        <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4 animate-bounce" />
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
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
