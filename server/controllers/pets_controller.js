const Pet = require('../models/pet_model');

module.exports = {

	pets: (req, res) => {
		Pet.find({}, (err, products) => {
			if (err) {
				err = err.errors;
			}
			res.json({
				'errors': err,
				'pets': products
			});
		}).sort({type: 1});
	},

	pet: (req, res) => {
		Pet.findById(req.params.id, (err, pet) => {
			if (err) {
				err = err.errors;
			}
			res.json({
				'errors': err,
				'pet': pet
			});
		});
	},

	create: (req, res) => {
		Pet.count({name: req.body.name}, (err, count) => {
			if (count > 0) {
				let message = "Pet name already exists in database";
				res.json({'errors': err, 'count': count, 'message': message});
			} else {
				let pet = new Pet({
					name: req.body.name,
					type: req.body.type,
					desc: req.body.desc,
					skill1: req.body.skill1,
					skill2: req.body.skill2,
					skill3: req.body.skill3,
				});
				pet.save((err, pet) => {
					if (err) {
						err = err.errors;
					}
					res.json({
						'errors': err,
						'pet': pet
					});
				});
			}
		});
	},

	update: (req, res) => {
		Pet.findByIdAndUpdate(req.params.id, {
					$set: {
						name: req.body.name,
						type: req.body.type,
						desc: req.body.desc,
						skill1: req.body.skill1,
						skill2: req.body.skill2,
						skill3: req.body.skill3,
					},
				},
				{runValidators: true},
				(err, pet) => {
					if (err) {
						err = err.errors;
					}
					res.json({
						'errors': err,
						'pet': pet
					});
				});
	},

	delete: (req, res) => {
		Pet.findByIdAndDelete(req.params.id, (err, pet) => {
					if (err) {
						err = err.errors;
					}
					res.json({
						'errors': err,
						'pet': pet
					});
				}
		);
	},

	like: (req, res) => {
		Pet.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}},
				(err, pet) => {
					if (err) {
						err = err.errors;
					}
					res.json({
						'errors': err,
						'pet': pet
					});
				});
	}

};
