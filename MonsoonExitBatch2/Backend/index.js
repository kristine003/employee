const express=require('express')
const cors=require('cors');
const app=new express();
const PORT=4000;
//connect the connection.js to server file
require('./connection');
const empData=require('./model/EmpData')

app.use(express.json());
app.use(cors());

app.post('/new-emp',async(req,res)=>{

  try{
      var item=req.body;
      const dataitem=new empData(item);
      const saveddata=await dataitem.save();
      res.send('Post Sucessfull')
  }
  catch(error){
      console.log(error);
  }
})

app.get('/employees',async(req,res)=>{
  try{
      const data=await empData.find();
      res.send(data);
  }
  catch(error){
  console.log("ERROR!")
  }
  })


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
