/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	findEmployeebyUsername:function(req,res) {
		var uname = req.param('username');
		User.findOne({username:uname})
		.exec(function(err,user){

			if(err)
				res.json({error:err});
			if(user === undefined)
				res.json({notFound:true});
			else
				res.json({notFound:false,userData:user});
		});
	}
};

