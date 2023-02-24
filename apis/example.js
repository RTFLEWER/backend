const express = require("express");

router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello");
});

router.get("/sum", (request, response) => {
  let n1 = parseInt(request.query.n1);
  let n2 = parseInt(request.query.n2);

  let sum = n1 + n2;

  response.send("Sum is: " + sum);
});

router.get("/operation", (request, response) => {
  let n1 = parseFloat(request.query.n1);
  let n2 = parseFloat(request.query.n2);

  if (request.query.operation == "sum") {
    response.send(`Result: ${n1 + n2}`);
  } else if (request.query.operation == "product") {
    response.send(`Result: ${n1 * n2}`);
  } else if (request.query.operation == "difference") {
    response.send(`Result: ${n1 - n2}`);
  } else if (request.query.operation == "division") {
    response.send(`Result: ${n1 / n2}`);
  } else {
    response.send("Invalid Operation");
  }
});

router.post("/add-new-user", (request, response) => {
  let first_name = request.body.fname;
  let last_name = request.body.lname;
  let age = request.body.age;
  let phone = request.body.phone;

  response.send(`Hello, ${first_name} ${last_name}`);
});

module.exports = { router };
