const express=require('express');

const company=require('./route/company');
const indexrouter=require('./route/index');
const expresslayout=require('express-ejs-layouts');
const bodyparser=require('body-parser');


const app=express();
app.set('view engine','ejs');
app.set('views',__dirname+'/views'); 
app.set('layout','layouts/layout');
app.use(expresslayout);
app.use('/',indexrouter);
app.use('/company',company);




app.listen(3000);