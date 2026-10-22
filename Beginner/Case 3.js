
const user = {
  username: "alex20",
  email: "alex@example.com"
};

user.isActive = true;
delete user.email;

console.log(user);
