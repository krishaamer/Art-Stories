Template.videoPlayer.onCreated(function() {

	this.slug = () => FlowRouter.getParam('slug');
  	this.autorun(() => {
    	this.subscribe('projects.single', this.slug(), () => {

    		let project = Projects.findOne({
				slug:this.slug(), 
				lang:TAPi18n.getLanguage()
			}) || {};

			Meteor.setTimeout(() => {

				let url = project.video || false;
				let contentID;
				let type;

				if(url) {
					if (url.indexOf("youtube") > -1) {

						contentID = url.replace("https://www.youtube.com/watch?v=", "");
						type = "youtube";

					} else if (url.indexOf("vimeo") > -1) {

						contentID = url.replace("https://vimeo.com/", "");
						type = "vimeo";

					}

					$('.ui.embed').embed({
					  source: type,
					  id: contentID,
					  placeholder: false,
					  hd: true,
					  autoplay: false,
					  color: "#ffffff",
					  brandedUI: false,
					  icon: false
					});
				}

			}, 1);

    	});
  	});
});