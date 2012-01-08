
$(function(){

	var  stats = new Stats()
		,imRonBurgundy = true
		,last = +new Date
		,cvs = $('#cvs')[0]
		,ctx = cvs && cvs.getContext('2d')

		,loops = []

	window.sickofit = {
		 loops: loops
		,cvs: cvs
		,ctx: ctx
		,iterations: 0
		,stats: stats
		,stop: function(){
			var e = jQuery.Event("keyup");
			e.which = 27;
			$(document).trigger(e) // stop
		} 
	};

	// stats
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.right = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild( stats.domElement );

	$(document).bind('keyup', function(e){ if(e.which === 27) imRonBurgundy = false; });

	(function go(time){
		var dt = time - last
			,i;
			
		for(i = 0; i < loops.length; i++){
			loops[i]( dt, ctx );
		}

		last = time;
		stats.update();
		window.sickofit.iterations += 1;
		
		if(imRonBurgundy){ requestAnimationFrame(go, window.sickofit.cvs); }
		else{ console.log('STOP IN THE NAME OF SCIENCE') }
		
	})(last)

})
