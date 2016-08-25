Template.projectsSingle.onCreated(function () {

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
	}
});