function ConfirmDelete({
  contact,
  onConfirm,
  onCancel,
}) {
  if (!contact) return null;

  return (
    <div className="space-y-6">

      {/* Warning */}
      <div className="text-center">

        <div className="text-5xl sm:text-6xl mb-4">
          ⚠️
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Delete Contact
        </h2>

        <p className="text-gray-600 break-words">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            {contact.name}
          </span>
          ?
        </p>

        <p className="text-sm text-red-500 mt-2">
          This action cannot be undone.
        </p>

      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">

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
          type="button"
          onClick={() => onConfirm(contact.id)}
          className="
            w-full
            sm:w-auto
            px-5
            py-2
            bg-red-600
            hover:bg-red-700
            text-white
            rounded-lg
            transition
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default ConfirmDelete;