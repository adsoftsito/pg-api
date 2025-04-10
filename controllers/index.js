const models =  require("../database/models");

const  createUser  = async (req,  res)  =>  {
   console.log('creating user');

   try {
      const user = await models.User.create(req.body);
      
      return res.status(201).json( { user });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};

const  deleteUser  = async (req,  res)  =>  {
   console.log('deleting user...');

   try {
      const user = await models.User.findOne({ where: { id: req.params.id } });
      if (user) {
	  console.log(user);
          await user.destroy();
      }     
      return res.status(200).json( { "deleted ": req.params.id });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};

const  getAllUsers  = async (req,  res)  =>  {
   console.log('getting users');

   try {
      const users = await models.User.findAll({
         include: []
      });
      
      return res.status(200).json( { users });
   }
   catch  (error) {
      return res.status(500).send ( error.message);
   }

};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser
};
