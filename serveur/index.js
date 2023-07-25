const express = require('express'); // impoter le module express
const app = express(); // creer une instance d'express js

const router = express.Router();
router.get('/9ahwa', (req, res) => {
	res.send('9ahwa');
});
app.use('/', router);

app.listen(3000, () => console.log('Serveur en marche'));
