import { connect } from 'mongoose';

const initMongoConnection = () => {
  connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));
};

export default initMongoConnection;
