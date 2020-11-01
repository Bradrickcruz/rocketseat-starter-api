import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/mongoapi';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

export default mongoose;
