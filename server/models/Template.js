const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: String,
    content: String,
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
