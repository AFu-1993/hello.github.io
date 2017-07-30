requirejs.config({
	baseUrl:'js',
	paths:{
		'jquery':[
		'lib/jquery','http://libs.baidu.com/jquery/1.9.1/jquery.min'
		]
	}
});
		

require(['jquery'],function($) {
		var nowY,distance,startY;
		var startTop=0;var sectionHeight=0;
		$('section').children().each(function() {
				sectionHeight+=$(this).height();
				});
	$('.slideblock').mousedown(function(e) {
		e.preventDefault();
		//鼠标起始y坐标
		startY=e.pageY;
		//
		$(document).mousemove(function(e) {
			//鼠标移动后的y坐标
			console.log(e.pageY);
			nowY=e.pageY;
			distance=nowY-startY;
			var slideblockDistance=startTop+distance<0?0:Math.min(startTop+distance,180);
			$('.slideblock').css('top',slideblockDistance);
			sectionScroll=slideblockDistance/180*(sectionHeight-200);

			$('section').scrollTop(sectionScroll);

		}).mouseup(function(e) {
			startTop=Number($('.slideblock').css('top').replace('px',''));
			$(this).off('mousemove');
			
		});
	});
});