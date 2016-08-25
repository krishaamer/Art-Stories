Template.partners.onCreated(() => {
	Meteor.subscribe('partners');
});

Template.partners.helpers({
	partners () {

		// Find & return partners {}
		return Partners.find({},
			{
				image: 1,
				name: 1,
			},{
				sort: {order: 1}
			});
	}
});