const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true, required: true },
  street: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
});

const UserSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: String, required: true },
    address: { type: AddressSchema, required: true },
  },
  {
    collection: 'user',
  }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
