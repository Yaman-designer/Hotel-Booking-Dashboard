import { Phone, Mail } from "lucide-react";

export default function GuestProfileCard({ guest }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md mt-12 mx-5 hover:shadow-xl transition-shadow w-full max-w-sm">
      {/* Header with Background */}
      <div className="relative h-32 ">
        <img
          src={guest.bgAvatar}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Avatar */}
        <img
          src={guest.avatar}
          alt={guest.name}
          className="absolute left-1/2 -translate-x-1/2 -bottom-14 w-28 h-28 rounded-full border-4 border-white object-cover shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="pt-16 px-6 pb-6">
        {/* User Info */}
        <div className="text-center mb-6">
          <p className="text-xs font-semibold tracking-wide mb-1 text-primary-600">
            {guest.profileName.toUpperCase()}
          </p>
          <h2 className="text-2xl font-bold mb-1 text-gray-900">
            {guest.name}
          </h2>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          {/* Phone */}
          <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-gray-50 cursor-pointer group">
            <div className="h-10 w-10 rounded-full flex items-center justify-center transition-colors  bg-primary-50">
              <Phone
                className="w-5 h-5 text-primary-500 transition-transform group-hover:scale-110"
                strokeWidth={2}
              />
            </div>
            <span
              className="text-sm font-medium flex-1"
              style={{ color: "#374151" }}
            >
              {guest.phone}
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-gray-50 cursor-pointer group">
            <div className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-primary-50">
              <Mail
                className="w-5 h-5 text-primary-500 transition-transform group-hover:scale-110"
                strokeWidth={2}
              />
            </div>
            <span
              className="text-sm font-medium flex-1"
              style={{ color: "#374151" }}
            >
              {guest.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
