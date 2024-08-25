const express = require('express');
const cors = require('cors');
const PORT = 3000;
const cookieparser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieparser());

app.use(require('./routes/postRoutes'));

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
