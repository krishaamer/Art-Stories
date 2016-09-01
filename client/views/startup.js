Meteor.startup(() => {

	Status.setTemplate('semantic_ui');

	var userLang = navigator.language || navigator.userLanguage,
	availLang = TAPi18n.getLanguages();

	if (_.isObject(availLang) && availLang[userLang]) {
	    TAPi18n.setLanguage(userLang); 
	} else if (_.isObject(availLang) && availLang[userLang.substr(0,2)]) {
	    TAPi18n.setLanguage(userLang.substr(0,2));
	} else {
	    TAPi18n.setLanguage('cn');
	}

	window.fbAsyncInit = () => {
	  return FB.init({
	    appId: Meteor.settings["public"].facebook.appId,
	    cookie: true,
	    status: true,
	    xfbml: true,
	    version: 'v2.7'
	  });
	};

});