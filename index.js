const mysql = require('mysql2')
require('dotenv').config()


//console.log(process.env.DBHOST)

const dbConfig = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
  database: process.env.DB,

}

const conn = mysql.createConnection(dbConfig)

//delete table, just in case its already there


conn.query('drop table if exists name', (err, res) => {
  if (err) {
    console.log('Table not deleted\n', err)
  } else {
    console.log('Removing old table..')
  }
})


//create new table
conn.query('create table name(id int primary key auto_increment, firstname varchar(55), lastname varchar(55))', (err, res) => {
  if (err) {
    console.log('Table creation failed\n', err)
  } else {
    console.log('Creating new one....')
  }
})

//populate the table
conn.query("insert into name (firstname, lastname)values ('John', 'Green'),('Dan', 'Brown'), ('Henry', 'White'),('Andrew', 'Black'),('Michael', 'Grey')", (err, res) => {
  if (err) {
    console.log('Data insertion failed...\n', err)
  } else {
    console.log('Data seeded!')
  }
})


conn.end(err => {
  if (err) {
    console.log(err)
  }
})
