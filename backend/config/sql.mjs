import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const database = process.env.REACT_APP_DATABASE_URL;

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: null,
    database: 'mitrakom',
  });


export default connection.promise();