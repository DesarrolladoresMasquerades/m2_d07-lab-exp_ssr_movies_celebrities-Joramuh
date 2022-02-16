// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const { Error } = require("mongoose");
const Celebrity = require("../models/Celebrity.model")

// GET route to show form **********************************

router.route("/create")
.get((req, res)=> res.render("celebrities/new-celebrity"))
.post((req, res)=>{
    const name = req.body.name
    const occupation = req.body.occupation
    const catchphrase = req.body.catchphrase;

    Celebrity.create({name, occupation, catchphrase})
    .then(()=> res.redirect ("celebrities"))
    .catch(error=> console.log(error))        
})

router.route("/")
.get((req, res)=>{
    Celebrity.find()
    .then(allCelebrities=>res.render("celebrities/celebrities", {allCelebrities}))
    .catch(error=>console.log(error))

})


module.exports = router;