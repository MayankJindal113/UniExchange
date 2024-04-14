const express = require("express")
const path = require("path")
// app is an instance of express (an http server)
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/signup', (req, res) => {
    res.render('login')
})
app.get('/', (req, res) => {
    res.render('login')
})


app.get('/home', (req, res) =>{
    res.render("electronics", {
        naming: req.body.name
    })  
})
// in get request user ask 


// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.post('/signup', async (req, res) => {
    
    // const data = new LogInCollection({
    //     name: req.body.name,
    //     password: req.body.password
    // })
    // await data.save()

    const data = {
        name: req.body.name,
        email: req.body.email,
        rno: req.body.rno,
        pno: req.body.pno,   
        department: req.body.department,
        hostel: req.body.hostel,
        password: req.body.password
    }

    // const checking = await LogInCollection.findOne({ name: req.body.name })
    const checking = await LogInCollection.findOne({ email: req.body.email })


   try{
    // if ( checking.name === req.body.name && checking.password===req.body.password) {
    if (checking) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch(e){
    res.send(e.message)
   }
    res.status(201).render("electronics", {
        naming: req.body.name
    })
})



app.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const foundUser = await LogInCollection.findOne({ name: req.body.name})
        // console.log("The email entered is : ", foundUser.email);
        if (foundUser.password === req.body.password) {
            res.status(201).redirect('/home')
            // res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }
        else {
            res.send("incorrect password")
        }
    } 
    catch (e) {
        res.send("wrong details")
    }
})
app.get('/logout', (req, res) => {
    res.redirect('/')
})


app.listen(port, () => {
    console.log('port connected');
})