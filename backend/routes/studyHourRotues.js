import express from 'express'
import {addStudyHours,allData} from '../controllers/studyHourController.js';  

const router = express.Router(); 

router.route('/').post(addStudyHours).get(allData); 
export default router; 