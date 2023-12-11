const User = require('../models/users.model');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(405).json({ message: 'Invalid input' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid user id' });
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid user id' });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params._id);
    if (user) {
      res.status(200).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid user id' });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
