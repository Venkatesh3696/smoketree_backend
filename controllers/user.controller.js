import { connection } from '../config/db.js';

export const register = async (req, res) => {
	try {
		const { name, address } = req.body;

		if (!name || !address) {
			return res
				.status(422)
				.send({ message: 'name and address is required!' });
		}

		const [userResults] = await connection.query(
			`INSERT INTO users (name) VALUES('${name}')`,
		);

		const userId = userResults.insertId;

		const [addressResults] = await connection.query(
			`INSERT INTO address (address, userId) VALUES('${address}', ${userId});`,
		);

		res.status(201).send({
			message: 'user Registered successfully',
			addressResults,
		});
	} catch (error) {
		console.log(error);
		res.status(402).send('something wrong');
	}
};

export const users = async (req, res) => {
	try {
		const [results] = await connection.query(
			'SELECT * FROM users LEFT JOIN address ON users.id = address.userId',
		);
		res.send(results);
	} catch (error) {
		console.log(error);
	}
};
