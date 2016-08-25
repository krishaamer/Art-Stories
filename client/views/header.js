Template.header.onCreated(() => {

  Meteor.subscribe("current_user_data");
  let slug = FlowRouter.getParam("slug") || false;
  if(slug) {
    Meteor.subscribe('projects.single', slug);
  }
});


Template.header.onRendered(function () {

  Tracker.autorun(() => {
    $('.ui.dropdown').dropdown({
      onChange (value) {
        TAPi18n.setLanguage(value);
      }
    });
  });

});

Template.header.helpers({
  pageTitle () {

    let title;
    let slug = FlowRouter.getParam("slug");
    if(slug){
      let project = Projects.findOne({
        slug: slug,
        lang: TAPi18n.getLanguage()
      });
      title = project.author;
    } else {
      title = TAPi18n.__("Be more creative");
    }
    return title;
  },
  storyTitle () {

    let slug = FlowRouter.getParam("slug") || false;
    if(slug){
      let project = Projects.findOne({
        slug: slug,
        lang: TAPi18n.getLanguage()
      }) || false;
      return project.title;
    }
   
  },
  storySubtitle () {

    let title;
    let slug = FlowRouter.getParam("slug");
    if(slug){
      let project = Projects.findOne({
        slug: slug,
        lang: TAPi18n.getLanguage()
      });
      title = project.subtitle;
    } else {
      title = false;
    }
    return title;
  },
  helloName () {
    analytics.identify({
      email: Meteor.user().profile.email,
      first_name: Meteor.user().profile.first_name,
      last_name: Meteor.user().profile.last_name
    });
    return Meteor.user().profile.first_name;
  }
});


Template.header.events({
  "click #logout": (err, tmpl) => {

    Meteor.logout((err) => {      
      if (err) {
        analytics.track("Logout error");
        
      } else {
        analytics.track("Logout success");
      }
    })
  },
  "click #login": (err, tmpl) => {
    
    analytics.track("Login Clicked");
    
    Meteor.loginWithFacebook({ 
      requestPermissions: ['email']},
      function (err) {
        if (err) {
          analytics.track("Login failed", {
            problem: err,
            why: err.reason
          });
          
        } else {
          analytics.track("Login success");
        }
    });
  }
});