const departments = [
  "HR",
  "IT",
  "Finance",
  "Marketing",
  "Sales",
  "Support",
];

const statuses = ["Active", "Inactive", "Pending"];

const firstNames = [
  "John",
  "Emma",
  "Alex",
  "Sophia",
  "Michael",
  "Sarah",
  "David",
  "Olivia",
  "Daniel",
  "Emily",
  "James",
  "Grace",
  "William",
  "Ava",
  "Benjamin",
  "Mia",
  "Lucas",
  "Charlotte",
  "Henry",
  "Amelia",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Wilson",
  "Taylor",
  "Anderson",
  "Thomas",
  "Martin",
  "Jackson",
  "White",
];

const contacts = Array.from({ length: 100 }, (_, index) => {
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[index % lastNames.length];

  return {
    id: index + 1,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}${index + 1}@gmail.com`,
    phone: `98${String(10000000 + index).slice(-8)}`,
    department: departments[index % departments.length],
    status: statuses[index % statuses.length],
    photo:
`https://randomuser.me/api/portraits/${
  index % 2 === 0 ? "men" : "women"
}/${index % 50 + 1}.jpg`
  };
});

export default contacts;