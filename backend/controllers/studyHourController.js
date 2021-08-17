import Study from '../models/studyHourModel.js'; 


const addStudyHours = async (req,res) => { 
  try { 
    //check if there is any data inserted today 
    //Check if there is any  data already exists today 
    const hasData = await Study.findOne({date: req.body.date}); 
    let data; 
    if(hasData)  
    {
      data = await Study.findOneAndUpdate({date: req.body.date},req.body,{
        new: true
      }); 
      console.log(data,'updated'); 
      res.json( { 
        status: "updated", 
        data, 
      })
    }
    else { 
      data = await Study.create(req.body); 
      res.json( { 
        status: 'success', 
        data, 
      })
    } 

  } catch (error) {
    res.status(400).json({
      status: 'fail', 
      message: error
    })
  }
}


const allData = async (req,res) => { 
  try {
    const data = await Study.find(); 
    res.json({
      status: 'success', 
      results: data.length, 
      data
    })
  } catch (error) {
    res.status(404).json({
      status: 'fail', 
      message: error
    })
  }
  
}
export {addStudyHours,allData}