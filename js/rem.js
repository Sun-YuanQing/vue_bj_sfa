
		 
		        var w = window.screen.width;
		        var targetW = 550; 
		        var scale = w / targetW; //当前尺寸/目标尺寸
		        var meta = document.createElement("meta");
		        meta.name = "viewport";
		        meta.content = "user-scalable=no,initial-scale=" +
					scale + ",minimum-scale=" + scale + ",maximum-scale=" + scale + ",width=" + targetW;
		        console.log(scale);
		      //  alert(scale);
		        document.head.appendChild(meta);
		