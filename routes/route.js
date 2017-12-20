const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retreive existing contacts
router.get('/contacts', (req, res, next) => {
    //write logic to retrive data from the db here
    Contact.find((err, contacts) => {
        res.json(contacts);
    });
});

//add new contacts
router.post('/contacts', (req, res, next) => {
    //write logic to post contact data;
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if(err){
            res.json({msg:'Failed to add contact !'});
        }else{
            res.json({msg:'Contact saved successfully !'});
        }
    });
});

//delete existing contacts
router.delete('/contacts/:id', (req, res, next) => {
    //write logic to delete contact data;
    Contact.remove({_id:req.params.id}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


//always export your routes
module.exports = router;
