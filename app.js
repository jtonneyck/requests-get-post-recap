const express = require("express")
const app = express()
const hbs = require("hbs")
const PORT = 3000
const mongoose = require("mongoose")

// mongoose.connect('mongodb://localhost/blog-demo', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err)=> {
//     if(err) console.log(err)
//     else console.log("connected to mongoDB")
// });

/* same thing, with a promise */
mongoose.connect('mongodb://localhost/blog-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
    console.log("connected to mongoDB")
})
.catch((err)=> {
    console.log(err)
})

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({extended: true}))

app.use("/blog", require("./routes/blog"))

app.listen(PORT, ()=> {
    console.log("Webserver listening on port number", PORT)
})

