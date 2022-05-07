const express = require('express');
const { route } = require('./routes');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/user', route.user);
app.use('/login', route.login);
app.use('/categories', route.category);
app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
