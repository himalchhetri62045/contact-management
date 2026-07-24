function SearchBar({
  search,
  setSearch,
  searchType,
  setSearchType,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 flex-1">

      {/* Search Type Selector */}
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="
          w-full
          sm:w-40
          border
          border-gray-300
          rounded-lg
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="id">ID</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder={`Search by ${searchType}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          flex-1
          border
          border-gray-300
          rounded-lg
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}

export default SearchBar;