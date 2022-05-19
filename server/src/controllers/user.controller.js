import User from '../models/user.model.js';

export const createUser = async (req, res) => {
	const data = req.body;
	const user = new User(data);

	try {
		await user.save();

		res.status(201).send({
			status: 201,
			statusText: 'Create',
			data: user,
			massage: 'User was created successfully!',
		});
	} catch (err) {
        console.log(err)
		res.status(400).send({
			status: 400,
			statusText: 'Bad request',
			massage: 'User was not created!',
		});
	}
};
