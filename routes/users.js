var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Car = require('../models/car');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let users = User.find({}, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

router.get('/cool', function(req, res, next) {
    res.send('You\'re so cool');
});

router.get('/new', function(req, res, next) {
    let user = new User({
        name: 'Vitaliy',
        country: 'USA'
    });
    user.save(err => {
        if (err) throw err;

        let car = new Car({
            model: 'Honda',
            owner: user._id
        });

        car.save(err => {
            if (err) throw err;
        })
    });
    res.send('You added new user Kostia');
});

router.get('/getcar', function(req, res, next) {
    Car
        .findOne({model: 'Honda'})
        .populate('owner')
        .exec((err, car) => {
            if (err) throw err;
            res.json(car)
        })
});

router.get('/get-all-cars', function(req, res, next) {
    let user = User.findOne({name: 'Vitaliy'}, (err, user) => {
        Car
            .find({owner: user._id})
            .exec((err, cars) => {
                if (err) throw err;
                res.json(cars)
            })
    });

});

module.exports = router;
