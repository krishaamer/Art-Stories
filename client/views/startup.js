Meteor.startup(() => {

	Status.setTemplate('semantic_ui');

	let userLang = navigator.language || navigator.userLanguage;
	let availLang = TAPi18n.getLanguages();

	if (_.isObject(availLang) && availLang[userLang]) {
	    TAPi18n.setLanguage(userLang); 
	} else if (_.isObject(availLang) && availLang[userLang.substr(0,2)]) {
	    TAPi18n.setLanguage(userLang.substr(0,2));
	} else {
	    TAPi18n.setLanguage('cn');
	}

	let appId = Meteor.settings["public"].facebook.appId;
	if(Meteor.absoluteUrl() == "http://localhost:3000/"){ 
		appId = Meteor.settings["public"].facebook.appIdDev
	}

	window.fbAsyncInit = () => {
	  return FB.init({
	    appId: appId,
	    cookie: true,
	    status: true,
	    xfbml: true,
	    version: 'v2.7'
	  });
	};

});