const express =  require('express');
const bodyParser =  require('body-parser');

const noticeRoutes = require('./routes/noticeRoutes');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST')
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();

})
app.use(noticeRoutes);

app.listen(8080); // listen to incoming requests