var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./app/models/item');

//DB setup
mongoose.connect("mongodb://mongo:27017/groceryDb");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


//middleware to use for all requests
router.use(function(req, res, next){
    console.log("Request is comming...");
    next();
})


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.route('/items')
    .post(function(req, res){

        if(req.body.name){
            var item = new Item({
                name: req.body.name
            });
    
            item.save(function(err){
                if(err)
                    res.send(err);
                res.json(req.body);
            });
        }
        else{
            res.json({message: "please provide a valid name"});
        }

        
    })

    .get(function(req, res){
        Item.find(function(err, items){
            if (err)
                res.send(err);
            res.json(items);
        })
    });

router.route('/items/:item_name')
    .get(function(req, res){
        Item.find({name: req.params.item_name}, function(err, items){
            if(err)
                res.send(err);
            res.json(items);
        });
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);