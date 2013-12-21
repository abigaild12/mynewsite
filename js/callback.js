$ (function() {
		
	    $ ('#clickme').click(function() {

	   		$.ajax({
	   			url: 'http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js',
	   			dataType: 'jsonp',
	   			crossDomain: true,
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
	   	
	});   	