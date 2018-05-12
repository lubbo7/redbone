const express = require('express'),
    MongoClient = require('mongodb').MongoClient;
        consolidate = require('consolidate'),
      //  MongoClient = require('mongobd').MongoClient,
app = express();

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{

    if (err) throw err;
    db = client.db('musica');

});

var CD = {
    nombre: "Lust for Life",
    ventas: 100000,
}

app.get ('/', (req, res)=>{

    var producto = db.collection('albumes').find();

    producto.toArray((err, result) => {
        res.render('index', {
            albumes: result
        }); //fin res.render
    });
});

app.listen (3000, ()=>{
    console.log("Puerto en funcionamiento");
});