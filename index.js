const mysql = require('mysql2')

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'seeder'
}

const conn = mysql.createConnection(dbConfig, console.log('Connected'))


//delete table, just in case its already there

conn.query('drop table name', (err, res) => {
  if (err) {
    console.log('Table not deleted')
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
    console.log('Data insertion failed...')
  } else {
    console.log('Data seeded!')
  }
})


