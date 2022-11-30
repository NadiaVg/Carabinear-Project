const db = require("../models");
const User = db.users;
const Op= db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.CP){
      res.status(400).send({
        message: "Content cannot be empty!"
      });
    }
  
    // Create a User
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      CP: req.body.CP,
      admin: req.body.admin ? req.body.isAdmin : false,
      filename: req.file ? req.file.filename : ""
    }
  
    // Save User in the database
    User.create(user).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user"
      })
    });
  }; 

  // Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Restaurant.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving all Users"
      })
    })
  };


  // Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id)
  
    User.findOne({ where: { email: user.email } })
    .then(data => {
      if (data) {
        const result = bcrypt.compareSync(user.password, data.password);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        // get basic user details
        const userObj = utils.getCleanUser(data);
        // return the token along with user details
        return res.json({ user: userObj, access_token: token });
      }

      user.password = bcrypt.hashSync(req.body.password);

      // User not found. Save new User in the database
      User.create(user)
        .then(data => {
          const token = utils.generateToken(data);
          // get basic user details
          const userObj = utils.getCleanUser(data);
          // return the token along with user details
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
  };
  

  // Update User

exports.update = (req, res) => {

    const id = req.params.id;
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.CP){
      res.status(400).send({
        message: "Content cannot be empty!"
      });
    }

 // Create a User
 const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin ? req.body.isAdmin : "0",
    CP: req.body.CP,
    filename: req.file ? req.file.filename : ""
  }

  User.update(user, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe Restaurant was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });

};
// Delete


exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };


  // Find a single Restaurant with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Restaurant with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Restaurant with id=" + id
      });
    });
};