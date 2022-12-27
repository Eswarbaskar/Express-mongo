var express = require('express');
var router = express.Router();
const {dbName,dbUrl,mongodbClient,mongodb}=require('../dbconfig');

let client = new mongodbClient(dbUrl);

/* GET home page. */
router.get('/all',async(req, res)=> {
    await client.connect()
    try {
      let db = await client.db(dbName);
      let user = await db.collection('mentor').find().toArray();
      res.send({
        statuscode:200,
        data:user
      })
  
    } catch (error) {
      console.log(error);
      res.send({
        statuscode:400,
        message:'internal server error'
  
      })
      
    }
    finally{
      client.close()
    }
    
  });
  
  router.post('/add-mentor',async(req, res)=> {
    await client.connect()
    try {
      let db = await client.db(dbName);
      let user = await db.collection('mentor').insertOne(req.body);
      res.send({
        statuscode:200,
        message:'mentor added successfully',
        data:user
      })
  
    } catch (error) {
      console.log(error);
      res.send({
        statuscode:400,
        message:'internal server error'
        
      })
      
    }
    finally{
      client.close()
    }
    
  });

module.exports = router;