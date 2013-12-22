/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/	
	$('#nytimes-main-role').show();
	$.ajax(
	{
		url:'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js',
		jsonp : 'callback',
		dataType:'jsonp',
		crossDomain: true,
		success:function(data) {
			var items = [];

	   				$.each(data.results, function(key,val) {

	   					items.push('<li id="' + key + '">' + val.attributes.alt + '</li>');
	   		});
			$('<ul/>', {
				'class': 'article-news-list',
				html: items.join('')
			}).appendTo('#nytimes-main-role');
		}
	});
/*$('document').ready(function() {

	$('#demo-output').show();
	$.ajax(
	{
		url: 'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js?callback=?',
		type: "GET",
	   	dataType: 'jsonp',
	   	crossDomain: true,
		success:function(data) {
			var items = [];
			/*Puts into list found linksimages' alt text from jquery.com site*/
			/*$.each(data.results, function(key, val) {
				/* val.text refers to content of tags */
				/*items.push('<li id="' + key + '">' + val.attributes.alt + '</li>');
			});
			$('<ul/>', {
				'class': 'my-new-list',
				html: items.join('')
			}).appendTo('#demo-output');
			$('#demo-output-loader').hide();
		}
	});
});*/


/*(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
})();*/



/*$ (function() {
		
	    $ ('#clickme').click(function() {

	   		$.ajax({
	   			url: 'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js?callback=?',
	   			jsonp : "callback",
	   			dataType: 'jsonp',
	   			/*crossDomain: true,
	   			success: function(data) {

	   				var items = [];

	   				$.each(data, function(key,val) {

	   					items.push('<li id="' + key + '">' + val + '</li>');
	   				});
	   				
	   				$('</ul>', {
	   					'class': 'article-news-list',
	   					html: items.join('')
	   				}).appendto('body');

	   			}

	   		});

	   	});
	   	
	});*/