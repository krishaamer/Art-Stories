Template.projects.onCreated(() => {
	Meteor.subscribe('projects');
});

Template.projects.onRendered(function () {
	//$('.ui.fluid.image img').addClass('fade');
	console.log(this);
	$('#' + this.data.slug).vide(this.data.trailer);
});

Template.projects.helpers({
	projects () {
		return Projects.find({
					lang:TAPi18n.getLanguage()
				},{
					image: 1,
					slug: 1,
					title: 1,
					status: 1,
					trailer: 1
				},{
					sort: {order: 1}
				});
	},
    currentSlug () {

		let slug = FlowRouter.getParam("slug");
		if(slug) {
			return slug;
		} else {
			return "";
		}
    }
});