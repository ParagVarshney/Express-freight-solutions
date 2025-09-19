import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ClipboardCheck,
  Package,
  Search,
  Smile,
  User,
  Users,
  Leaf,
} from "lucide-react";

const Contacts = () => {
  return (
    <section id="contact" className="bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600">
          Ready to experience world-class freight solutions? Our team is available 24/7 to help you.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: MapPin,
            title: "Address",
            value: "Dubai,UAE",
          },
          {
            icon: Phone,
            title: "Phone",
            value: "+97 1 56 163 5092",
          },
          {
            icon: Mail,
            title: "Email",
            value: "info@expressfreightsolutions.com.au",
          },
          {
            icon: Globe,
            title: "Website",
            value: "www.expressfreightsolutions.com.au",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <item.icon className="h-8 w-8 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* How to Get Started */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          How to Get Started
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ClipboardCheck,
              step: "Request a Quote",
              desc: "Contact us via phone, email, or website and receive a customized quote within 24 hours.",
            },
            {
              icon: Package,
              step: "Plan Your Shipment",
              desc: "Work with our experts to design a logistics plan tailored to your needs.",
            },
            {
              icon: Search,
              step: "Track Your Cargo",
              desc: "Use our online portal to monitor your shipment in real time.",
            },
            {
              icon: Smile,
              step: "Enjoy Peace of Mind",
              desc: "Focus on your business while we handle the logistics with care.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 text-center shadow-md hover:shadow-xl transition"
            >
              <s.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">{s.step}</h4>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Our Team
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              role: "CEO",
              desc: "25 years in logistics, driving innovation and customer satisfaction.",
              icon: User,
            },
            {
              name: "Emma Wilson",
              role: "Operations Director",
              desc: "Oversees our global network to ensure seamless worldwide operations.",
              icon: Users,
            },
            {
              name: "Raj Patel",
              role: "Sustainability Lead",
              desc: "Leads eco-friendly initiatives, reducing our carbon footprint.",
              icon: Leaf,
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <member.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-blue-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-gray-100 rounded-2xl shadow-md p-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          About Our Developer
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Website developed by <span className="font-bold">Kriworld Itech Private Limited</span>, 
          a trusted technology partner specializing in innovative web solutions. 
          With a focus on quality and performance, they delivered a seamless, user-friendly website for 
          Express Freight Solutions.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Project Director:</strong> Harish Gupta <br />
          Address: 367, Second Floor, Sarai Khawaja, Faridabad, Haryana - 121003, India <br />
          Email: harishgkriworld@gmail.com | Phone: +91 83838 91889 <br />
          Website: www.kriworld.com
        </p>
      </div>
    </section>
  );
};

export default Contacts;

