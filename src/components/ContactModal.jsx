function ContactModal({
  isOpen,
  title,
  children,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      {/* Modal */}
      <div className="w-full max-w-lg max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-4 sm:p-5">

          <h2 className="text-lg sm:text-xl font-bold">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-500 transition hover:text-red-500"
          >
            ✕
          </button>

        </div>

        {/* Body */}
        <div className="max-h-[calc(90vh-70px)] overflow-y-auto p-4 sm:p-6">

          {children}

        </div>

      </div>

    </div>
  );
}

export default ContactModal;