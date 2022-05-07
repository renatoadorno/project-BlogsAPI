const express = require('express');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);

app.listen(3000, () => console.log('ouvindo porta 3000'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
