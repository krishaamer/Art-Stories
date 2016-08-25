Template.registerHelper('timeFormat', (date, format) => {
  	return moment(date).format(format);
});

Template.registerHelper('linkFormat', (url) => {

	var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
	var domain = matches && matches[1]; 

	if(domain) {
		url = domain;
	}

  	return url;
});

Template.registerHelper('shortTitle', (string, length) => {
  	return s.prune(string, length);
});

Template.registerHelper('videoFormat', (url) => {

	if (url.indexOf("youtube") > -1) {
		url = url.replace("https://www.youtube.com/watch?v=", "");
	} else if (url.indexOf("vimeo") > -1) {
		url = url.replace("https://vimeo.com/", "");
	} else if (url.indexOf("facebook") > -1) {
		url = url.replace("https://www.facebook.com/video.php?v=", "");
	}

  	return url;
});


Template.registerHelper('dataSource', (url) => {

	let src;
	if (url.indexOf("youtube") > -1) {
		src = "youtube";
	} else if (url.indexOf("vimeo") > -1) {
		src = "vimeo";
	} else if (url.indexOf("facebook") > -1) {
		src = "facebook";
	}

  	return src;
});