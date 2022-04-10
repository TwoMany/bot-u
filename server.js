const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const blogRouter = require('./routes/blog.routes');

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', blogRouter);


app.listen(3000);