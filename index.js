var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('\n Bitte navigiere auf /api um auf die Daten zuzugreifen ');
});

app.get('/api', (req, res) => {
	res.send(JSON.stringify(data, null, 2));
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log('⏳ Server wird gestartet..');
	console.log(`🛴 Der Server läuft unter http://localhost:${PORT}`);
});

const data = {
	Schrank: {
		Höhe: 210,
		Breite: 180,
		Farbe: 'Blau'
	},
	Kommode: {
		Höhe: 190,
		Breite: 200,
		Farbe: 'Gelb'
	}
};
