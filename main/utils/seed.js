const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "Ryan",
    email: "ryan@gmail.com",
    thought: [],
  },
  {
    username: "AllenH",
    email: "allenh@gmail.com",
    thought: [],
  },
];

const thoughts = [
  {
    username: "AllenH",
    thoughtText: "this is a test",
    reaction: [],
  },
];

console.log(connection);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete!");
  process.exit(0);
});
