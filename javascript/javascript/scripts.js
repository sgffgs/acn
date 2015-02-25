		var clickedTime;
		var createdTime;
		var reactionTime;
		
		var wait;
		
		var boxWidth, boxHeight, boxColor;
		var randomColor;
		var letters;
		var color;
		
		var x_pos, y_pos;

		
		function getRandomColor() {
		
			letters = '0123456789ABCDEF'.split('');
			color = '#';
			for (var i = 0; i < 6; i++ ) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}

		
		function makeBox(){
		
			boxWidth = Math.random() * 500;
			randomColor=getRandomColor();

			
		
			wait = Math.random() * 5000;
			
				var top=Math.random() * screen.height * .40;
				var left=Math.random() * screen.width * .40;
			
				var width = Math.random() * 170 + 30;
			<!-- Reappears box -->

			setTimeout(function() {
			
				console.log("drawing box");	
				document.getElementById("box").style.width=width + "px";
				document.getElementById("box").style.height=width + "px";
				document.getElementById("box").style.backgroundColor=randomColor;
				document.getElementById("box").style.borderRadius="0px";
				document.getElementById("box").style.display="block";
				document.getElementById("box").style.left=left + "px";
				document.getElementById("box").style.top=top + "px";	
				createdTime = Date.now();
			}, wait);
		}
		
		function makeCircle(){
		
				boxWidth = Math.random() * 500;
				randomColor=getRandomColor();
				wait = Math.random() * 5000;
				console.log("drawing circle");
				var top=Math.random() * screen.height * .40;
				var left=Math.random() * screen.width * .40;
				var width = Math.random() * 170 + 30;
				
			
		
			setTimeout(function() {
				
				document.getElementById("box").style.width=width + "px";
				document.getElementById("box").style.height=width + "px";
				document.getElementById("box").style.backgroundColor=randomColor;
				document.getElementById("box").style.display="block";
				document.getElementById("box").style.borderRadius="200px";
				document.getElementById("box").style.left=left + "px";
				document.getElementById("box").style.top=top + "px";	
				createdTime = Date.now();
			}, wait);
			
				document.getElementById("box").style.borderRadius="0px";
		}
		
		function makeShape(){
			
			var random = Math.random();
			
			if (random > 0.5){
				

					makeBox();
					
			} 
			else  {

					makeCircle();
					
			}

			
		}
		
		makeShape();
		


		
		<!-- Disappears box when user clicks on it -->
		document.getElementById("box").onclick = function (){
			
			clickedTime=Date.now();
			reactionTime=clickedTime-createdTime;
			this.style.display="none";
			document.getElementById("time").innerHTML=reactionTime/1000 + " seconds";
			makeShape();
		}