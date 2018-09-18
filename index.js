const express = require('express');
const app = express();
const ejs = require('ejs');
var body-parser = require('body-parser');
const request = require('request');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'), { maxage: '1d' } );
app.use( body-parser.json();
app.use( body-parser.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/urunler',(req,res)=>{
    request('http://localhost:3002/products', function (error, response, body) {
        if(error){
            res.redirect('/');
        }
        let json = JSON.parse(body);
        res.render('products.ejs',{products:json});

    });

});

app.get('*',(req,res)=>{
    res.status(404).send('Not Found');
})


app.listen(PORT,()=>{console.log("listenin on port 3000");})
