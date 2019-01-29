const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
// тепер потрібно створити схему userа, тобто те як ми хочемо щоб він виглядав- вказуємо поля необхідні для роботи

const userSchema = Schema({
    name: String,
    country: String,
    cars: [{type: Schema.Types.ObjectId, ref: 'Car'}]
});
userSchema.statics.findUserByName = function (name, cb) {
    return this.findOne({name: new RegExp(name, 'i')}, cb)
};

// після нам треба створити модель
const User = mongoose.model('User', userSchema);
// тепер треба модель експортувати щоб ми могли її юзати в інших місцях
module.exports  = User;