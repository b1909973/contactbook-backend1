// var module = {
//         exports:{}

// }
const contactsRouter = require("./app/routes/contact.route");
express = require('express')
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/contacts',contactsRouter)

app.get("/",function(req,res){

    res.json({message:"Welcome to contact-book application 1"});
})

module.exports= app

// return module.exports