import bcrypt from "bcryptjs";
const users = [
  {
    name: "owner operator",
    email: "owner@thewash.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Delilah",
    email: "deliliah@thewash.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Micah Sean",
    email: "msw@thewash.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
