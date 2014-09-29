
/* This document was produced only for sample purposes during tutoring sessions 
and should not be used as a final work.
Code below produced by: Shawn Solomon in September 2014 */

// set-up jQuery on document ready to hook appropriate DOM elements with event listeners
$(document).ready(function(){
	/*
	 * This is for comment form validation with the 
	 * jQuery validation plug-in.
	 */

	// validate commentForm on keyup and submit
	$("#commentForm").validate({
		rules: {
			name: { 
				required:true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 20
			}
		},
		// Content of messages
		messages: {
			name: {
				required:"Your name is required",
				minlength:"Your name must be at least 2 characters long"
			},
			email: {
				required:"Your email address is required",
				email:"Please enter a valid email address"
			},
			message: {
				required:"You must enter a message",
				minlength:"Your message must be at least 20 characters long"
			}

		}
	});
	
// Copyright Shawn Solomon 2014 -- Code provided above for sample purposes only.
});