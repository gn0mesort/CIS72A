var megatech = (function(){
	var linkCount = 0;
	var curColor = 0;
	var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
	var rainbowId = 0;
	var rainbow = function(element) {
			element.style.color = colors[curColor++];
			if(curColor > colors.length) { curColor = 0; }
	};
	
	return {
		loadPug : function() {
			element = document.getElementById("pug");
			element.innerHTML = "<p style='text-align: center;'><img src='../img/pug.jpg' height='192' width='108'/></p>" + element.innerHTML;
		},
		clear : function(element){ element.innerHTML = ""; },
		insertLink : function(element, link){ 
			element.innerHTML += "<p id='link" + linkCount++ + "'><a href='" + link + "'>" + link + "</a></p>"; 
		},
		toggleRainbow : function(element){
			if(rainbowId === 0){ rainbowId = setInterval(rainbow, 75, element); }
			else { 
				clearInterval(rainbowId);
				rainbowId = 0;
			}
		}
	};
})();