Meteor.publish('projects', () => {
  return Projects.find({});
});

Meteor.publish('projects.single', (slug) => {
  return Projects.find({slug: slug});
});

Meteor.publish('about', () => {
  return About.find({});
});

Meteor.publish('partners', () => {
  return Partners.find({}, { 
    sort: {order: 1}
  });
});

Meteor.publish('team', () => {
  return Team.find({}, { 
    sort: {order: 1}
  });
});