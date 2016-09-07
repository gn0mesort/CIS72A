var megatech = (function(){
	var linkCount = 0;
	var curColor = 0;
	var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
	var rainbowId = 0;
	var rainbow = function(element) {
			element.style.color = colors[curColor++];
			if(curColor > colors.length) { curColor = 0; }
			//element.style.color = "#" + curColor.toString(16);
			//++curColor;
			//if(curColor > 255) { curColor = 0; }
	};
	
	return {
		clear : function(element){ element.innerHTML = ""; },
		insertLink : function(element, link){ 
			element.innerHTML += "<p id='link" + linkCount++ + "'><a href='" + link + "'>" + link + "</a></p>"; 
		},
		startRainbow : function(element){
			if(rainbowId === 0){ rainbowId = setInterval(rainbow, 75, element); }
			else { 
				clearInterval(rainbowId);
				rainbowId = 0;
			}
		}
	};
})();