FlowRouter.route('/', {
  name: 'home',
  action () {
    BlazeLayout.render("layout", {
      aboveContent: "about",
      content: "projects"
    });
  }
});

FlowRouter.route('/:slug', {
  name: 'projectsSingle',
  action () {
    
    $('.ui.embed').embed();
    BlazeLayout.render("layout", {
      content: "projectsSingle",
      belowContent: "projects"
    });
  }
});