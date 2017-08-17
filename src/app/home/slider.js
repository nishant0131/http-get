;(function() {
	
	  $(document).ready(function() {
	
		var slider = function() {
		  
		  var backImg = [];
		  backImg[0] = "http://www.matejmichalik.com/black-and-white-photography/galleries/post-427/full/Black-and-white-photo-Tanah-lot-bali.jpg";
		  backImg[1] = "http://cdn.digital-photo-secrets.com/images/black-white-dendelion-large.jpg";
		  backImg[2] = "http://picturescollections.com/wp-content/uploads/2012/04/Black_And_White_Pictures...jpg";
		  
		  var i = 0;
		  var x = (backImg.length) - 1;
		  var int = 3500;
		  
		  var initialize = function() {
			attachEvents();
		  };
		  
		  var attachEvents = function() {
			$('.btnLeft').click(function() {
			  left();
			});
	
			$('.btnRight').click(function() {
			  right();
			});
		  };
	
		  var changeImg = function() {
			$('.slider').css('background-image', 'url(' + backImg[i] + ')');
		  }
	
		  var left = function() {
			(i <= 0) ? i = 3 : i--;
			changeImg(i);
		  };
	
		  var right = function() {
			(i >= x) ? i = 0 : i++;
			changeImg(i);
		  };
	
		  window.setInterval(right, int);
	
		  changeImg(i);
		  return initialize();
		}
	
		slider();
	
	  });
	  
	})();