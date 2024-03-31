const mongoose = require('mongoose');

const statementSchema = new mongoose.Schema({
    content: String
});

module.exports = mongoose.model('Statement', statementSchema);

module.exports = statementSchema;
