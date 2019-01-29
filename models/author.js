var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
    }
);

// Виртуальное свойство для полного имени автора
AuthorSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });

// Виртуальное свойство - URL автора
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

//virtual field for time in moment liba
AuthorSchema
    .virtual('date_of_birth_formatted')
    .get(function () {
        if (!this.date_of_birth) return null;
        return moment(this.date_of_birth).format('MMMM Do, YYYY');
    });

AuthorSchema
    .virtual('date_of_death_formatted')
    .get(function () {
        if (!this.date_of_death) return null;
        return moment(this.date_of_death).format('MMMM Do, YYYY');
    });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);