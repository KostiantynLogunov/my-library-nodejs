const mongoose = require('mongoose');
const config = require('../config');

/*mongoose.connect(config.get('mongoose:uri'),
                 config.get('mongoose:options'),
                 {useNewUrlParser: true});*/
mongoose.connect('mongodb://admin_lib:kos540232@ds119748.mlab.com:19748/my_local_library',
                 {useNewUrlParser: true});

module.exports = mongoose;