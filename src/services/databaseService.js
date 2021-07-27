import Mongoose from "mongoose";

export const dbConnect = () => {
  return Mongoose.connect('mongodb://localhost/frontend', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
