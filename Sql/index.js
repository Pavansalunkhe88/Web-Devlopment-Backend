const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
let q= "insert into user values ?";
let data=[];
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:"pavan17"
  });


  let RandomUser = () => {
    return [  
         faker.string.uuid(),
         faker.internet.userName(),
         faker.internet.email(),     
    ];
   };
  


// create connection query
try{
  connection.query(q,[data],(err,result)=>{
      if (err) throw err;
      console.log(result);
  });
} 
catch(err){
console.log(err);
}

connection.end();

