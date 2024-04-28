/**
 * MONGODB CONNECTION
 * -------------------
 * 1.CREATE A ACCOUNT
 * 2. CREATE A NEW USER WITH PASSWORD
 * WHITELIST IP ADDRESS
 * DATABASE > CONNECT > DRIVER > NODE> SHOW ALL CODE
 * CHANGE THE PASSWORD IN THE URI
 * 
 * POST
 * ---------
 * 
 * 1. create --- 'POST'
 * 2. app.post('/users', async(req, res)=>{})
 * 3. MAKE THE FUNCTION ASYNC TO USE AWAIT INSIDE IT
 * 4. make sure u use the express.json()middleware
 * 5.access data from the body: cont user = req.body
 * 6. const result  = await userCollection.insertOne(user);
 * 7. res.send(result);
 * 
 * 
 * ------------------
 * client
 * -------------
 * 
 * 1. create fetch
 * add 2nd parameter to object
 * provide method: 'POST'
 * add header :{'content-type' : 'application/json'}
 * add body: JSON.STRINGIFY(user)
 * 
 * 
 * 
 * 
 * _____
 * 
 * rEad many
 * __________
 * create a cursor  = userCollection.find()
 * const result  = await cursor.toArray()
 * 
 *  
 * -----------
 * delete
 * ````````
 * 1. create app.delete('/user/:id', async(req, res)=>{}) 
 * specify unique Object to delete the right user
 * 2. const query  = {_id: new ObjectId(id)}
 * const result = await userCollection.deleteOne(query);
 * res.send(result)
 * 
 *  ------
 *  client
 *  ------
 * create dynamic url with id
 * mention the delete method
`*  
 */