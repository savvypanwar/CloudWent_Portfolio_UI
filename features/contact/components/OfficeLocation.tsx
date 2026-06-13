import { MapPin } from "lucide-react";

export const OfficeLocation = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Our Office
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Visit our headquarters in the heart of New York City.
        </p>
      </div>
      <div className="aspect-video w-full bg-gray-100 relative">
        {/* Map placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2 opacity-50" />
            <p className="text-gray-400 text-sm">Interactive map coming soon</p>
            <p className="text-gray-600 font-medium mt-2">123 Innovation Drive, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};