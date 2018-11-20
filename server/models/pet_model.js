const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Pet name is required"],
		minlength: [3, "Name must have at least 3 characters"]
	},
	type: {
		type: String,
		required: [true, "Type is required"],
		minlength: [3, "Type must have at least 3 characters"]
	},
	desc: {
		type: String,
		required: [true, "Description is required"],
		minlength: [3, "Description must have at least 3 characters"]
	},
	skill1: {
		type: String,
		default: ""
	},
	skill2: {
		type: String,
		default: ""
	},
	skill3: {
		type: String,
		default: ""
	},
	likes: {
		type: Number,
		required: true,
		default: 0,
	}
}, {
	timestamps: true
});

let Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
