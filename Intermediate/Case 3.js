
const employee = {
  name: "Sarah",
  address: {
    street: "Main Street",
    city: "Sukabumi",
    postalCode: "43111"
  }
};

employee.address.city = "Bandung";

console.log(employee.name);
console.log(employee.address);
