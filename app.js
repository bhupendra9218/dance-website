const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance');
const port = 80;

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    adress: String,
    state: String
});

var Contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC  STUFF
app.use('/static', express.static('static')) //For serving static files

// Middleware for serving files --.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// PUG SPECIFIC STUFF 
app.set('view engine', 'pug') // Set the Template Engine As Pug 
app.set('views', path.join(__dirname, 'views')); // Set the Views Directory


//ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);

})
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);

})
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.status(200).render('contact.pug', { message: "Saved successfully!" });
        })
        .catch(() => {
            res.status(400).render('contact.pug', { message: "Failed to save data!" });
        });
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.status(200).render('contact.pug', { message: "Saved successfully!" });
        })
        .catch(() => {
            res.status(400).render('contact.pug', { message: "Failed to save data!" });
        });
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.status(200).render('contact.pug', { message: "Saved successfully!" });
        })
        .catch(() => {
            res.status(400).render('contact.pug', { message: "Failed to save data!" });
        });
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.status(200).render('contact.pug', { message: "Saved successfully!" });
        })
        .catch(() => {
            res.status(400).render('contact.pug', { message: "Failed to save data!" });
        });
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.status(200).render('contact.pug', { message: "Saved successfully!" });
        })
        .catch(() => {
            res.status(400).render('contact.pug', { message: "Failed to save data!" });
        });
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.status(200).render('contact.pug', { message: "Saved successfully!" });
        })
        .catch(() => {
            res.status(400).render('contact.pug', { message: "Failed to save data!" });
        });
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.send("This item has been saved to the database")
        })
        .catch(() => {
            res.status(400).send("Item was not saved to the database")
        });
});

// START THE SERVER 
app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`)

})



