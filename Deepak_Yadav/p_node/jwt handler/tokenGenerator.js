const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

module.exports = payload => {
  // PRIVATE and PUBLIC key
  var privateKEY = fs.readFileSync(
    path.resolve("./jwt handler/private.key"),
    "utf8"
  );
  //const privateKEY = "thisisshubhamsharma";
  var i = "CyberGroup India Pvt. Ltd."; // Issuer
  var s = "User Auth"; // Subject
  var a = "someone@cygrp.com"; // Audience

  const actualPayload = payload[0];

  // SIGNING OPTIONS
  var signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "12h",
    algorithm: "HS256"
  };

  try {
    var token = jwt.sign({ data: actualPayload }, privateKEY, signOptions);
    console.log("Token - " + token);
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};
