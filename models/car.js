const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// тепер потрібно створити схему car, тобто те як ми хочемо щоб він виглядав- вказуємо поля необхідні для роботи

const carSchema = Schema({
    model: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

carSchema.statics.findCarByModel= function (model, cb) {
    return this.findOne({model: new RegExp(model, 'i')}, cb)
};

// після нам треба створити модель
const Car = mongoose.model('Car', carSchema);
// тепер треба модель експортувати щоб ми могли її юзати в інших місцях
module.exports  = Car;