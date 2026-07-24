function ContactTable({
  contacts,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      {/* Horizontal scroll on mobile */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[900px]">

          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                Photo
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                ID
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                Name
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                Email
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                Phone
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                Department
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-3 py-3 md:px-6 md:py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="py-10 text-center text-gray-500"
                >
                  No contacts found.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-t odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
                >

                  {/* Photo */}
                  <td className="px-3 py-3 md:px-6 md:py-4">
                    <img
                      src={contact.photo}
                      alt={contact.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  </td>

                  {/* ID */}
                  <td className="px-3 py-3 md:px-6 md:py-4 text-sm">
                    {contact.id}
                  </td>

                  {/* Name */}
                  <td className="px-3 py-3 md:px-6 md:py-4 font-medium text-sm">
                    {contact.name}
                  </td>

                  {/* Email */}
                  <td className="px-3 py-3 md:px-6 md:py-4 text-sm">
                    {contact.email}
                  </td>

                  {/* Phone */}
                  <td className="px-3 py-3 md:px-6 md:py-4 text-sm">
                    {contact.phone}
                  </td>

                  {/* Department */}
                  <td className="px-3 py-3 md:px-6 md:py-4 text-sm">
                    {contact.department}
                  </td>

                  {/* Status */}
                  <td className="px-3 py-3 md:px-6 md:py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                        contact.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : contact.status === "Inactive"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-3 md:px-6 md:py-4">
                    <div className="flex flex-wrap justify-center gap-2">

                      <button
                        onClick={() => onView(contact)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        View
                      </button>

                      <button
                        onClick={() => onEdit(contact)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(contact)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ContactTable;