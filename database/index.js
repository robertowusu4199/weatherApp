const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config()


const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};




//successful database

// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PG_PORT,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log('Database connected successfully!') 
//   pool.end() 
// })



 
  // const pool = new Pool({
  //  connectionString: process.env.DATABASE_URL
  // });

  // pool.on('connect', () => {
  //   console.log('Databse is connected successfuly');
  // })

  // module.export = {
  //   query: (text, params) => pool.query(text. params),
  // };




// const { Client } = require('pg')
// const client = new Client({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
//   ssl: true,
// })
// client.connect(function(err) {
//   if (err) err;
//   console.log("Connected to database!");
// });

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res) 
//   pool.end() 
// }) 1

// pool.on('connect', ()=> {
//   console.log('Database connected successfully!');
// }); 2

// module.exports = {
//   query: (text, params) => pool.query(text, params)
// }







