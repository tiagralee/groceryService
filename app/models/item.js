var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: {
        type:String,
        unique:true,
        required:true
    },
    price: {
        type:Number,
        min:0
    }
});

module.exports = mongoose.model('Item', ItemSchema);