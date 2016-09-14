var megatech = (function(){
	var linkCount = 0;
	var curColor = 0;
	var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
	var rainbow = function(element) {
			element.style.color = colors[curColor++];
			if(curColor > colors.length) { curColor = 0; }
	};
	var processRps = function(data){
			if(data === 0){ return "../img/rock.jpg"; }
			else if (data === 1){ return "../img/paper.jpg"; }
			else if (data === 2){ return "../img/scissors.jpg"; }
			else { console.log("Invalid Data"); }
	};
	
	return {
		random : function(obj = {min : 0, max : 100}){
			return Math.floor((Math.random() * obj.max) + obj.min);
		},
		rps : function(data){
			var player = document.getElementById("player");
			var cpu = document.getElementById("cpu");
			player.src = processRps(data);
			player.removeAttribute("hidden");
			player.choice = data;
			cpu.choice = megatech.random({min : 0, max : 3});
			cpu.src = processRps(cpu.choice);
			cpu.removeAttribute("hidden")
			if(player.choice !== cpu.choice){
				if(player.choice === 0 && cpu.choice === 1) { return 0; }
				else if(player.choice === 0 && cpu.choice == 2){ return 1; }
				else if(player.choice === 1 && cpu.choice == 0){ return 1; }
				else if(player.choice === 1 && cpu.choice == 2){ return 0; }
				else if(player.choice === 2 && cpu.choice == 0){ return 0; }
				else if(player.choice === 2 && cpu.choice == 1){ return 1; }
				else { return -1; }
			}
			else{
				return -1;
			}
		},
		loadPug : function() {
			element = document.getElementById("pug");
			element.innerHTML = "<p style='text-align: center;'><img src='../img/pug.jpg' height='192' width='108'/></p>" + element.innerHTML;
		},
		clear : function(element){ element.innerHTML = ""; },
		insertLink : function(element, link){ 
			element.innerHTML += "<p id='link" + linkCount++ + "'><a href='" + link + "'>" + link + "</a></p>"; 
		},
		toggleRainbow : function(element){
			if(!megatech.isRainbow(element)){ 
				element.setAttribute("rainbow", setInterval(rainbow, 75, element) + "/" + element.style.color);
			}
			else { 
				var attrData = element.getAttribute("rainbow").split("/");
				clearInterval(Number(attrData[0]));
				element.style.color = attrData[1];
				element.removeAttribute("rainbow")
			}
		},
		isRainbow : function(element){
			if(element.getAttribute("rainbow")) { return true; }
			else { return false; }
		}
	};
})();