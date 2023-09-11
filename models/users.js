const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    minLength: 3,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  blogs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
  },
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    const id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.passwordHash;
    return { ...ret, id };
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
