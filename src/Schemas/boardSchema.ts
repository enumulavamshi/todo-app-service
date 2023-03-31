import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IBoard extends Document {
    id: string;
    name: string;
    position: number;
}

const BoardSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: Number, required: true },
});

const BoardModel: Model<IBoard> = mongoose.model<IBoard>(
  'Boards', BoardSchema
);

export default BoardModel;
