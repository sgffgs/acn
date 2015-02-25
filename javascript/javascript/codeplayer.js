		var windowHeight=$(window).height();
		var navHeight = $("#navbar").height();
		var codeContainerHeight = windowHeight - navHeight;

		$(".codeContainer").height(codeContainerHeight) + "px";
		
		$(".toggle").click(function(){
			
			$(this).toggleClass("selected");
			
			var activeDiv=$(this).html();
			
			$("#" + activeDiv + "Container").toggle();
			
			var showingDivs=$(".codeContainer").filter(function(){
				
					return($(this).css("display") != "none");
					
			}).length;
			
			var containerWidth = 100/(showingDivs );
			
			$(".codeContainer").width(containerWidth + "%");
		});
		
		$("#run").click(function(){
			
		$('iframe').contents().find('html').html("<style>" + $('#cssCode').val() + "</style>" + $("#htmlCode").val());
			
			<!-- document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val()); -->
			
		});
		