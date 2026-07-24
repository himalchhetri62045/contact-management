function ViewContact({ contact }) {
  if (!contact) return null;

  return (
    <div className="space-y-6">

      {/* Profile Photo */}
      <div className="flex justify-center">
        <img
          src={
            contact.photo ||
            "https://randomuser.me/api/portraits/men/1.jpg"
          }
          alt={contact.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* Name */}
      <div>
        <p className="text-sm text-gray-500">Name</p>
        <p className="text-lg sm:text-xl font-semibold break-words">
          {contact.name}
        </p>
      </div>

      {/* Email */}
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="break-all text-gray-800">
          {contact.email}
        </p>
      </div>

      {/* Phone */}
      <div>
        <p className="text-sm text-gray-500">Phone</p>
        <p className="text-gray-800">
          {contact.phone}
        </p>
      </div>

      {/* Department */}
      <div>
        <p className="text-sm text-gray-500">Department</p>
        <p className="text-gray-800">
          {contact.department}
        </p>
      </div>

      {/* Status */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Status</p>

        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium
            ${
              contact.status === "Active"
                ? "bg-green-100 text-green-700"
                : contact.status === "Inactive"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }
          `}
        >
          {contact.status}
        </span>
      </div>
    </div>
  );
}

export default ViewContact;