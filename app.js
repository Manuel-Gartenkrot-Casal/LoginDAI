import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
	const auth = req.headers.authorization || '';
	const tokenFromHeader = auth.startsWith('Bearer ') ? auth.slice(7) : null;
	const token = tokenFromHeader || req.body.token;
	if (!token) return res.status(400).json({ error: 'Token required' });

	const payload = jwt.verify(token, 'your-secret-key');
	if (!payload) return res.status(400).json({ error: 'Invalid token' });

	const pg = {
		host: 'localhost',
		port: 5432,
		user: 'postgres',
		password: 'postgres',
		database: 'testdb',
		connectionString: 'postgres://postgres:postgres@localhost:5432/testdb'
	};

	return res.json({ ok: true, payload, pg });
});

app.listen(PORT, () => {
	console.log(`Insecure login server listening on http://localhost:${PORT}`);
});
