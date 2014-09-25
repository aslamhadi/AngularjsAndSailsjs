/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	attributes: {
        username:{
        	type:"string",
        	required:"true",
        	unique:"true"
        },
        password:{
        	type:"string",
        	required:"true"
        },
		name:{
			type:"string",
			required:true,
		},				
		email:{
			type:"email",
			required:"false",
			unique: true
		},
		idNumber: "string",			
		phoneNumber: "string",
		address: "string",			
	}
};

