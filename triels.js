// // console.log(process.env.NODE_ENV);
// const bcrypt = require("bcrypt");

// const password = "1234"

// const hash = "$2b$10$eyjJNhxh9INwsoKxxwoHKOQE4YxA3lcBTAKT0AYRzMoVO6KYRfSRq"
// // bcrypt.hash(password, 10).then (result =>
// //     {
// //         console.log(result);
// //     })

// bcrypt.compare(password, hash).then(result => console.log(result))


//jwt

//  const jwt = require("jsonwebtoken");
//  const _=require("lodash");

//  const users= {
//      _id:1,
//      name:"Ahmed",
//      password:"ajsdllfklfklflmu",
//      isAdmin: true
//  }
 
// //  console.log(_.pick(users, ["_id","isAdmin"]));
//  const token =jwt.sign(_.pick(users, ["_id","isAdmin"]), "mySecretKey")
// //  console.log(token);
//  const tokenString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMxNzY1OH0.6yxQMXoLMya10k7zf6bAD0iHVKMDO7nTc25E30tr4v8";

//  const result = jwt.verify(tokenString,"mySecretKey" )
//  console.log(result);