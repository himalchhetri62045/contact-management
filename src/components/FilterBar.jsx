function FilterBar({
  department,
  setDepartment,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">

      {/* Department Filter */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="
          w-full
          sm:w-auto
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
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Support">Support</option>
      </select>

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="
          w-full
          sm:w-auto
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
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
          w-full
          sm:w-auto
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
        <option value="">Default</option>
        <option value="asc">Name (A-Z)</option>
        <option value="desc">Name (Z-A)</option>
      </select>

    </div>
  );
}

export default FilterBar;