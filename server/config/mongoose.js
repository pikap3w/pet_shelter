const mongoose = require('mongoose'),
  path = require('path'),
  fs = require('fs');

// MAKE SURE YOU CHANGE THE NAME OF YOUR DB HERE!
mongoose.connect('mongodb://localhost/pet_shelter', {
  useNewUrlParser: true,
});

// overwrite the promise library
mongoose.Promise = global.Promise;

// create a variable that points to the models folder
let models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(file => {
  if (file.includes('.js')) {
    console.log(`...loading ${file}...`);
    // require the file (this runs the model file which registers the schema)
    require(`${models_path}/${file}`);
  }
});
