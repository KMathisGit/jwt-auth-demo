/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData.js");

const { users, companies } = mockData;

// generating mock data for CRUD operations (only for authenticated users)
const mockDbJSON = JSON.stringify({ companies });

const mockDbFilePath = path.join(__dirname, "db.json");

fs.writeFile(mockDbFilePath, mockDbJSON, function (err) {
  err ? console.log(err) : console.log("Mock Data DB created.");
});

// generating mock users json for login/register processes
const userJSON = JSON.stringify({
  users,
});

const usersFilePath = path.join(__dirname, "users.json");

fs.writeFile(usersFilePath, userJSON, function (err) {
  err ? console.log(err) : console.log("Users DB created.");
});
