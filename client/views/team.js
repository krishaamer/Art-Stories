Template.team.onCreated(() => {
	Meteor.subscribe('team');
});

Template.team.helpers({
	team () {

		// Find & return team {}
		return Team.find({},
			{
				image: 1,
				name: 1,
				role: 1
			},{
				sort: {order: 1}
			}
		);
	}
});