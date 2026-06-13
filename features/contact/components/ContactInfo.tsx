import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@cloudwent.com",
      subDetails: "support@cloudwent.com",
      href: "mailto:hello@cloudwent.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (800) 123-4567",
      subDetails: "Mon-Fri 9am-6pm EST",
      href: "tel:+18001234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive",
      subDetails: "New York, NY 10001, USA",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday",
      subDetails: "9:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactDetails.map((item, i) => (
        <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
          <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <item.icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
          {item.href ? (
            <a href={item.href} className="text-blue-600 hover:underline">
              {item.details}
            </a>
          ) : (
            <p className="text-gray-600">{item.details}</p>
          )}
          <p className="text-gray-500 text-sm mt-1">{item.subDetails}</p>
        </div>
      ))}
    </div>
  );
};