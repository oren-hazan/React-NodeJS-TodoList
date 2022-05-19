import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import isStrongPassword from 'validator/lib/isStrongPassword.js';

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		lowercase: true,
		required: true,
	},

	lastName: {
		type: String,
		trim: true,
		lowercase: true,
		required: true,
	},

	email: {
		type: String,
		trim: true,
		required: true,
		unique: true,
		validate(value) {
			if (!isEmail(value)) throw new Error('Email is invalid');
		},
	},

	password: {
		type: String,
		trim: true,
		required: true,
		minLength: [8, 'Password must be at least 8 characters'],
		maxLength: [20, 'Password must be at most 20 characters'],
		validate(value) {
			if (
				!isStrongPassword(value, {
					minNumber: 1,
					minUppercase: 0,
                    minSymbols: 0
				})
			) {
				throw new Error('Password is not strong enough!');
			}
		},
	},
});

const User = mongoose.model('user', userSchema);

export default User;