import mongoose from 'mongoose';
import express, { Router } from 'express';
import BoardModel from './Schemas/boardSchema';
import { DB_CONNECTION_STRING } from './constants';

const router: Router = express.Router();

// Connecting to database
const query: string = `${DB_CONNECTION_STRING}?retryWrites=true&w=majority`;

const db: string = query;
mongoose.Promise = global.Promise;


// export const connectDb = async () => {
//     try {
//       await mongoose.connect(db, {
//         dbName: 'Todo'
//       })
//     } catch (error: any) {
//       console.log(error.message)
//     }
//   }

mongoose.connect(db, {
    dbName: 'Todo'
  })
  
export default router;
