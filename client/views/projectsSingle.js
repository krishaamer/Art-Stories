Template.projectsSingle.onCreated(function () {

	this.subscribe('projects');
	this.subscribe('secrets');

	this.slug = () => FlowRouter.getParam('slug');
	this.autorun(() => {
		this.subscribe('projects.single', this.slug);
	});
});

Template.projectsSingle.helpers({
	project () {
		return Projects.findOne({
			slug:FlowRouter.getParam("slug"),
			lang:TAPi18n.getLanguage()
		});
	},
	secret () {

		let secret = Secrets.findOne({
			code:FlowRouter.getQueryParam("secret")
		});

		if(secret) {
			return true;
		} else {
			return false;
		}
	}
});
