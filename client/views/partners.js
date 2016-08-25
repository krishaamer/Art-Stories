Template.partners.onCreated(() => {
	Meteor.subscribe('partners');
});

Template.partners.onRendered(() => {
	$('.ui.fluid.image img').addClass('fade');
});

Template.partners.helpers({
	partners () {
		return Partners.find({},
				{
					image: 1,
					name: 1,
				},{
					sort: {order: 1}
				});
	}
});