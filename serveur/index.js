const express = require('express'); // impoter le module express
const app = express(); // creer une instance d'express js

const router = express.Router();

router.get('/Description', (req, res) => {
	res.send('this page is a test for serveur express');
});

router.get('/Home', (req, res) => {
	res.send('welcome to the Home page ');
});

router.get('/:nom',(req,res)=>{

    res.send(`${req.params.nom}`);
})


app.use('/', router);

app.listen(3000, () => console.log('Serveur en marche'));
