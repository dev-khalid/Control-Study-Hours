import express from 'express';
import mongoose from 'mongoose';
import studyHourRoutes  from './routes/studyHourRotues.js';

const mongoDbURL =
  'mongodb+srv://akash:akash@akash-control-study-hou.2at6h.mongodb.net/akash-control-study-hour?retryWrites=true&w=majority';
mongoose
  .connect(mongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DATABASE connection Successful!');
  })
  .catch((error) => {
    console.log('Something went wrong. ');
  });
const app = express();
//res.body() readability
app.use(express.json());
app.use('/api/studyHours', studyHourRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
