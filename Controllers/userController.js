const Users = require("../Models/Users");


// get all user
const allUsers = async (req, res) => {
    try {
        const users = await Users.find();

        if (users) {

            res.status(200).json({ 'message': 'All Users.', 'users': users });
        } else {
            res.status(404).json({ 'message': 'User Not Found.' });
        }

    } catch (error) {
        console.log('Error:', error);
    }

}

// insert user
const insertUser = async (req, res) => {
    console.log(req.body)
    const { name, email, phone } = req.body;
    if (name) {
        try {
            const users = await Users.create({ name, email, phone });

            if (users) {

                res.status(200).json({
                    'message': 'User Inserted.',
                    'user': users
                });
            } else {
                throw new Error("Error inserting user");

                // res.status(404).json({ 'message': 'User not inserted.' });
            }

        } catch (error) {
            res.status(500).json({ 'message': 'Error inserting user', 'error': error.message });
        }
    }
    res.status(404).json({ 'message': 'Empty data.' });
}

// get single user
const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await Users.findById(id);
        if (user) {
            res.status(200).json({ 'message': `User fetched successfully`, 'user': user });
        } else {
            res.status(404).json({ 'message': 'User Not Found.' });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ 'message': 'Error fetching user.', 'error': error.message });
    }
};


// update user
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;
    try {

        const result = await Users.findByIdAndUpdate(
            id,
            { name, email, phone },
            { new: true, runValidators: true }
        );
        if (result) {
            res.status(200).json({ message: 'User updated successfully.', user: req.body });
        } else {
            res.status(404).json({ message: `User with ID ${id} not found.` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user.', error: error.message });
    }

}

// delete user
const deleteUser = async (req, res) => {
    try {
        const result = await Users.findByIdAndUpdate({ '_id': req.params.id });

        if (result.deletedCount > 0) {
            res.status(200).send({ 'message': `User with ID ${req.params.id} deleted successfully.` });
        } else {
            res.status(404).send({ 'message': `User with ID ${req.params.id} not found.` });
        }
    } catch (error) {
        res.status(500).send({ 'message': 'Error deleting user.', 'error': error.message });
    }
};


module.exports = { allUsers, insertUser, getUser, updateUser, deleteUser };