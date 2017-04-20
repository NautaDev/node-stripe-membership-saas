'use strict';

// middleware
var namecheap = require('namecheap');

exports.getSearchResults = function(req, res, next){

	

	var domain = req.query.fastDomain;
	domain = domain.replace(/\s/g,'');

	// console.log( domain );

	var form   = {},
    error      = null,
    formFlash  = req.flash('form'),
    errorFlash = req.flash('error');

	if (formFlash.length) {
		form.email = formFlash[0].email;
	}

	if (errorFlash.length) {
		error = errorFlash[0];
	}


	// namecheap.fetchCom()
	// namecheap.fetchNet()
	// namecheap.fetchMe()



	res.render(req.render, {
		title  : 'Search Results',
		form   : form,
		domain : '' || domain,
		error  : error
	});

};

exports.fetch = function(req, res, next){

	console.log( req.body );
	// req.assert('fastDomain', 'Domain field must be not notEmpty').notEmpty().len(1,60);
	// var errors = req.validationErrors();

	// if (errors) {
	// 	req.flash('errors', errors);
	// 	return res.redirect(req.redirect.failure);
	// }
	// console.log( req.body.fastDomain );
  
	// return false;

  res.render(req.render, {
    title: 'Search Results',
    form : form,
    error: error
  });
};

exports.book  = function(req, res, next){

  
	return false;
};

exports.show  = function(req, res, next){

  
	return false;
};

// availability check .com domain
exports.fetchCom = function(req, res, next){

  
	return false;
};

// availability check .net domain
exports.fetchNet = function(req, res, next){

  
	return false;
};
// availability check .me domain
exports.fetchMe = function(req, res, next){

  
	return false;
};



