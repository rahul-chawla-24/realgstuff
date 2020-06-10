const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');

const searchHistorySchema = {
    searchTerm : {
        type : String,
        required : true
    }
}

const SearchHistory = mongoose.model('searchHistory' , searchHistorySchema);

router.get('/', async (req,res,next) => {
    try {
    let history = await SearchHistory.find();
    res.json({
        status : true ,
        data : history,
    })
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

});

router.post('/', async (req,res,next)=>{
    try {
        let { searchTerm } = req.body;
    let history = await SearchHistory.create({searchTerm});
    res.json({
        status:true,
        data : history,
        message : "search term added"
    });
    } catch (error) {
       console.log(error);
       res.status(400).send(error); 
    }
});

router.delete('/all', async(req,res,next)=>{
    try {
        await SearchHistory.deleteMany();
        res.json({
            status:true,
            message : "All Search History deleted"
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.delete('/:id' ,async(req,res,next) => {
    try {
    let{ id } = req.params;
    await SearchHistory.deleteOne({ _id : ObjectID(id) });
    res.json({
        status : true,
        message : "deleted successfully"
    }) 
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;
