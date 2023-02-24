const express = require("express");
const db = require("../database");

let router = express.Router();

router.get("/users/get-all", (request, response) => {
  db.connection.query("select * from user", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Internal Server Error");
    } else {
      response.send(results);
    }
  });
});

router.get("/users/get-by-userid", (request, response) => {
  db.connection.query(
    `select * from user where user_id=${request.query.user_id}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Internal Server Error");
      } else {
        response.send(results);
      }
    }
  );
});

router.post("users/add-new", (request, response) => {
  db.connection.query(
    `insert into user (name,dob,email) values ('${request.body.name}','${request.body.dob}','${request.body.email}')`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Internal Server Error");
      } else if (results.affectedRows != 1) {
        response.status(500).send("Could not insert data properly");
      } else {
        response.send("Record saved!");
      }
    }
  );
});

module.exports = { router };
