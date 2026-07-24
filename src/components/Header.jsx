function Header({ onAddContact }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Contact Management
        </h1>

        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Manage your contacts efficiently
        </p>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={onAddContact}
        className="
          w-full
          sm:w-auto
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-3
          rounded-lg
          transition
        "
      >
        + Add Contact
      </button>

    </div>
  );
}

export default Header;