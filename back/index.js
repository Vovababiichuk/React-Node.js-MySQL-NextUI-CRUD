import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '15432Vova',
  database: 'test',
});

//NOTE -  Якщо є проблема з аутентифікацією (якщо вказували пароль при створені бази то може бути проблема)....вставляєм в консоль бази наступний код.....
//NOTE -  ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '15432Vova';

// даний код дозволяє нам надсилати будь який файл (post) json за допомогою клієнта
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello from backend!');
});

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)';
  const values = [
		req.body.title,
		req.body.desc,
		req.body.cover
	];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Book has been created!');
  });
});

app.listen(8800, () => {
  console.log('Connected to backend!');
});
