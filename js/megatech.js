var megatech = (function(){
	var linkCount = 0;
	var rainbow = function(element) {
		for(var i = 0; i < 256; ++i){
			element.style.color = "#" + i.toString(16);
		}
	};
	return {
		clear : function(element){ element.innerHTML = ""; },
		insertLink : function(element, link){ 
			element.innerHTML += "<p id='link" + linkCount++ + "'><a href='" + link + "'>" + link + "</a></p>"; 
		},
		startRainbow : function(element) {
			element.attributes["rainbow"] = true;
			rainbow(element);
		}
	};
})();