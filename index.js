const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());



// const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://user_name_is_error:User_Name_Is_Error0987654321@cluster0.fovwt3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

      // Connect to the "insertDB" database and access its "userCollection" collection
      const database = client.db("usersDB");
      const userCollection = database.collection("users");

    //get
    app.get('/users', async(req, res)=>{
      const cursor = userCollection.find()
      const result = await cursor.toArray();
      res.send(result);
    });


    //post
    app.post('/users', async (req, res) => {

      const user = req.body;
      console.log('new user', user);
      // Insert the defined document into the "userCollection" collection
      const result = await userCollection.insertOne(user);
      res.send(result);

    });
    //delete

    app.delete('/users/:id', async(req, res)=>{
      const id = req.params.id;
      console.log('plz dlt from db', id);
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




//arifmiahme322
//sg9HBDIhQ8OaCrx9
// mongodb+srv://arifmiahme322:dHgZf5qYgUMaCYBM@cluster0.fovwt3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://arifmiahme322:<password>@cluster0.fovwt3b.mongodb.net/
// un=> sg9HBDIhQ8OaCrx9
//ps=sg9HBDIhQ8OaCrx9


app.get('/', (req, res)=>{
    res.send('simple crud is ruuuunning');
})

app.listen(port, ()=>{
    console.log(`simple crud is running on port: ${port}`);
})
