import { useState, useEffect } from "react";

function ContactForm({
  initialData,
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "IT",
    status: "Active",
    photo: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "IT",
        status: "Active",
        photo: "",
      });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle Image Upload
  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          photo: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Profile Photo */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Profile Photo
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            p-2
            cursor-pointer
          "
        />

        {formData.photo && (
          <img
            src={formData.photo}
            alt="Preview"
            className="
              mt-4
              w-20
              h-20
              sm:w-24
              sm:h-24
              rounded-full
              object-cover
              border
            "
          />
        )}
      </div>

      {/* Name */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Phone
        </label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* Department */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Department
        </label>

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option>IT</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>Support</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="
            w-full
            sm:w-auto
            px-5
            py-2
            border
            border-gray-300
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          className="
            w-full
            sm:w-auto
            px-5
            py-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-lg
            transition
          "
        >
          {initialData ? "Update Contact" : "Add Contact"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;