Template.orionBootstrapCollectionsUpdate.events({
	'click .save-btn': function () {
    	$('#orionBootstrapCollectionsUpdateForm').submit();
  	}
});

AutoForm.addHooks('orionBootstrapCollectionsUpdateForm', {
  	onSuccess: function() {

  		$('.orion-bootstrap-admin h1.title').addClass("success");

  		setTimeout(function() {
  			$('.orion-bootstrap-admin h1.title').removeClass("success");
		}, 2000);

  	}
});
