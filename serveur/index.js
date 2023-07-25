const express = require('express'); // impoter le module express
const app = express(); // creer une instance d'express js
const router = express.Router();
const fs = require('fs');

router.get('/Description', (req, res) => {
	res.send('this page is a test for serveur express');
});

router.get('/Home', (req, res) => {
	res.send('welcome to the Home page ');
});

// creation d'un routeur avec une paramettres
router.get('/:nom', (req, res) => {
	// remarque 1: donc eli ba3ed 2 point c'est paramettre et eli ba3ed el / c'est nom du routeur
	res.send('je suis ' + `${req.params.nom}`); // remarque2:
});

router.get('/:a/:b', (req, res) => {
	res.send(
		'addition : ' + `${parseInt(req.params.a) + parseInt(req.params.b)}`
	);
});
app.use('/', router);

app.listen(3000, () => console.log('Serveur en marche'));
