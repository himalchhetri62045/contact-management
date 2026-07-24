function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  if (totalPages <= 1) {
    return null;
  }

  // Show only pages around the current page
  const visiblePages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      Math.abs(page - currentPage) <= 1
  );

  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      {/* Page Info */}
      <p className="text-center sm:text-left text-gray-600">
        Page {currentPage} of {totalPages}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2">

        {/* Previous */}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page, index) => {
          const previousPage = visiblePages[index - 1];

          return (
            <div key={page} className="flex items-center gap-2">

              {previousPage &&
                page - previousPage > 1 && (
                  <span className="px-1 text-gray-500">
                    ...
                  </span>
                )}

              <button
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {page}
              </button>

            </div>
          );
        })}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default Pagination;