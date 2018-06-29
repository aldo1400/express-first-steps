// const http=require('http');

// http.createServer((req,res)=>{
//     res.end('Hello world');
// }).listen(3000);


const express=require('express');
const app=express();
const morgan=require('morgan');

// setting

app.set('appName','Mi primer server');
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
// middleware
app.use(morgan('dev'));

// app.use(function(req,res,next){
//     console.log('request url :' + req.url);
//     next();
// });

// app.use((req,res,next)=>{
//     console.log('Ha pasado por esta funcion');
//     next();
// });
//routes

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/login',(req,res)=>{
    res.render('login.ejs');
});

app.get('*',(req,res)=>{
    res.end('archivo no encontrado');
});

app.listen(3000,()=>{
    console.log('Servidor escuchando!');
    console.log('Nombre de la app :' ,app.get('appName'));
});