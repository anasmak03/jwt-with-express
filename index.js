const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended : true}))


const  user = {
    id : 2,
    name: "anasmak",
    email: "anasdev@gmail.com",
    admin: true
}

function generateAccessToken(user) {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn : '1800s'})
}

app.post('/api/login', (req,res) => {
    if(req.body.email !== user.email){
        res.status(401).send('invalid credantial')
        return;
    }

    if(req.body.password !== 'anas5313N'){
        res.status(401).send('invalid password')
        return;
    }
    const acess = generateAccessToken(user)
    res.send({
        acess
    })

})




const PORT = 9000
app.listen(PORT, (req,res) => {
    console.log(`server run in ${PORT}`)
})