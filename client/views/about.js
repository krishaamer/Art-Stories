Template.about.onRendered(() => {
	Meteor.subscribe('about');
});

Template.about.helpers({
	about () {
		return About.find({
			lang:TAPi18n.getLanguage()
		});
	}
});