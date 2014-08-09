$(function(){
	$('.full-image-bg').animate({opacity:'1'}, function(){
			$('.intro-txt h1').animate({marginTop:'0', opacity:'1'},300, function(){
				$('.intro-txt h3').animate({marginTop:'0', opacity:'1'},400);
			})
		});
})
 //Header

	$(window).scroll(function(){
		var scrollYpos = $(document).scrollTop();
			if (scrollYpos > 50 ) {
				$('#header').removeClass('header-Init');
				$('#header').addClass('ha-header');
			} else {
				$('#header').addClass('header-Init');
				$('#header').removeClass('ha-header');
			}
	});

	$(function(){
		var formBox = $('.formulario-iner')
		var $this = $('.btn-service a#frequent')
		var $other = $('.btn-service a#occasional')
			
		$('.btn-service a#frequent').click(function(e){
			e.preventDefault();
			
			formBox.addClass('frequent')
			formBox.slideDown(300, function(){ $(this).find('.container').fadeIn();}).css({overflow:''});
			$this.parents('.btn-service').fadeOut(500);
			$other.parents('.btn-service').fadeIn(500);
			
		})
		
		$('.btn-service a#occasional').click(function(e){
			e.preventDefault();
			
			formBox.slideDown(300, function(){ $(this).find('.container').fadeIn();}).css({overflow:''});
			formBox.removeClass('frequent')
			$this.parents('.btn-service').fadeIn(500);
			$other.parents('.btn-service').fadeOut(500);
			
		})
	})
	$(function(){
	//Scroll Arrow
		$('.arrow-bottom-iner a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 600, 'swing');
		});
	})
  //Work
	$(function (activar_pestanya) {
		var tabContainerssup = $('div.contendor-work-iner > div');
			$('div.controler-buttom-work a').click(function () {
				tabContainerssup.hide().filter(this.hash).fadeIn(1000);
				$("a",$(this).parents("ul")).removeClass('active');
				$(this).addClass('active');
				return false;
			}).filter(':first').click();
		});
	
	$(document).ready(function(){
	   var tipo;
   
	   $("#frequent").click(function(){
			tipo="frequent";
	   });
	   $("#occasional").click(function(){
			tipo="occasional";
	    });
	
	   $(".Solicitar").click(function()
	   {
			var nombreContacto=$('#fullname').val();
			var cargo=$('#cargo').val();
			var email=$('#email').val();
			var empresa=$('#empresa').val();
			var ruc=$("#ruc").val();
			var telefono=$('#phone').val();
			var message=$('#message').val();
			if($(".form-content").parsley('isValid'))
			{
				var urlDATA="tipo="+tipo+"&nombre="+nombreContacto+"&cargo="+cargo+"&email="+email+"&empresa="+empresa+"&ruc="+ruc+"&telefono="+telefono+"&message="+message;
				$(".Solicitar").attr("disabled",true);
				$.ajax({
							url:"email/envioEmailVMC.php",
							type:"POST",
							cache:false,
							data:urlDATA,
							success:function(repuesta)
							{
							   if(repuesta=="1")
							   {
								$(".form-content").fadeOut("slow");
								$(".mensaje-enviado").show();
							   }
							   else
							   {
								alert("No se pudo Enviar el Mensaje");
							   }
			  
							}
						});
			}
			else
			{
				$(".form-content").parsley('validate');
			}
	   });
		
})

$(document).ready(function(e) {
    if ( ! window.console ) console = { log: function(){} };
	
	// The actual plugin
	$('.nav').singlePageNav({
		offset: $('.nav').outerHeight(),
		filter: ':not(.external)',
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
});