const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Если файл не найден, отправляем страницу 404
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Ошибка сервера');
            return;
          }
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        });
      } else {
        // Для других ошибок сервера
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Ошибка сервера');
      }
      return;
    }

    // Определяем тип контента в зависимости от расширения файла
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    if (extname === '.css') {
      contentType = 'text/css';
    } else if (extname === '.js') {
      contentType = 'application/javascript';
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(data);
  });
}).listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
