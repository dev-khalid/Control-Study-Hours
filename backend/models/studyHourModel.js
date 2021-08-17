import mongoose from 'mongoose'; 

const studyHourSchema = mongoose.Schema(
  {
    studyHourCount: {
      type: Number,
      required: true,
    },
    date: { 
      type: String, 
      required: true, 
    }
  }
);

const Study = mongoose.model('Study',studyHourSchema); 
export default Study; 