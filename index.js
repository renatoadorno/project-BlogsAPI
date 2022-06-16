require('dotenv').config();
const express = require('express');
const { route } = require('./routes');
const error = require('./middlewares/error');

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.use('/user', route.user);
app.use('/login', route.login);
app.use('/categories', route.category);
app.use('/post', route.post);
app.use(error);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
