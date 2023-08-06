const mongoose = require('mongoose');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));;

const client = require('./config/databse');
const { signUp,login} = require('./controller/authenticationController')


// database
const databaseConnect = async() => {
    console.log('establishing connection...');
    try {
      await mongoose.connect(process.env.MONGO_URI);      
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("authentication").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

databaseConnect().catch(err => console.log(err));

// Authentication endpoint for login
app.post('/login', login );

// signUp for admin user
app.post('/signup', signUp );

app.listen(5000, () => {
    console.log('server is listening port 5000...')
})