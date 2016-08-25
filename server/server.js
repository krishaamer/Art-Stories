Meteor.startup( function() {
  process.env.MAIL_URL = "smtp://postmaster%40krishaamer.mailgun.org:9xvfw1wuyt32@smtp.mailgun.org:587";
});

Meteor.publish("access_token", function () {
	return Meteor.users.find({ _id : this.userId}, 
		{'services.facebook.accessToken': 1}
	);
});

Accounts.onCreateUser(function (options, user) {

    var accessToken = user.services.facebook.accessToken, result, profile;
	result = Meteor.http.get("https://graph.facebook.com/me", {
		params: {
		  access_token: accessToken
		}
	});

	profile = _.pick(result.data, "services.facebook.name", "services.facebook.picture", "services.facebook.email");
	if (options.profile) {

		options.profile.picture 	= "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
		options.profile.first_name 	= user.services.facebook.first_name;
		options.profile.last_name 	= user.services.facebook.last_name;
		options.profile.gender 		= user.services.facebook.gender;
		options.profile.email		= user.services.facebook.email;
		options.profile.has_pledged = false;
		options.profile.message		= "";
		user.profile = options.profile;
	}
	
    return user;
});

/* Make sure we're using the correct API keys for the dev / live servers */
ServiceConfiguration.configurations.remove({
  service: "facebook"
});

if(Meteor.absoluteUrl() == "http://localhost:3000/"){

	ServiceConfiguration.configurations.upsert(
	{ service: "facebook" },
	  {
	    $set: {
	      appId: "1613725145554917",
	      loginStyle: "popup",
	      secret: "abf743e3c480aa4894cb474fdf2f3192"
	    }
	  }
	);

} else {

	ServiceConfiguration.configurations.upsert(
	{ service: "facebook" },
	  {
	    $set: {
	      appId: "1607296829531082",
	      loginStyle: "popup",
	      secret: "4b17ab078aaee007dd0a0ad7b1645839"
	    }
	  }
	);
}

Meteor.publish("current_user_data", function () {
	return Meteor.users.find({_id: this.userId},
		{fields: {'profile.first_name': 1, 'profile.last_name': 1, 'profile.picture': 1}});
});