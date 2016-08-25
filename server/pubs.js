Meteor.publish('projects', () => {
  return Projects.find({}, {
    sort: {timestamp: -1}
  });
});

Meteor.publish('projects.single', (slug) => {
  return Projects.find({slug: slug}, { 
    fields: {} 
  });
});

Meteor.publish('about', () => {
  return About.find({}, { 
    sort: {timestamp: -1}
  });
});