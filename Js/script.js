
// page homme produit 1
$(".product-colors0 span").click(function(){
	$(".product-colors0 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic0").css("background-image",$(this).attr("data-pic"));
})

//  page homme produit 2 
$(".product-colors1 span").click(function(){
	$(".product-colors1 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic1").css("background-image",$(this).attr("data-pic"));
})

//  page homme produit 3
$(".product-colors2 span").click(function(){
	$(".product-colors2 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic2").css("background-image",$(this).attr("data-pic"));
})

//  page homme produit 4
$(".product-colors3 span").click(function(){
	$(".product-colors3 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic3").css("background-image",$(this).attr("data-pic"));
})

//  page homme produit 5
$(".product-colors4 span").click(function(){
	$(".product-colors4 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic4").css("background-image",$(this).attr("data-pic"));
})

//  page femme produit 1
$(".product-colors5 span").click(function(){
	$(".product-colors5 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic5").css("background-image",$(this).attr("data-pic"));
})

//  page femme produit 2
$(".product-colors6 span").click(function(){
	$(".product-colors6 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic6").css("background-image",$(this).attr("data-pic"));
})

//  page femme produit 3
$(".product-colors7 span").click(function(){
	$(".product-colors7 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic7").css("background-image",$(this).attr("data-pic"));
})

//  page femme produit 3
$(".product-colors8 span").click(function(){
	$(".product-colors8 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic8").css("background-image",$(this).attr("data-pic"));
})
//  page femme produit 4
$(".product-colors9 span").click(function(){
	$(".product-colors9 span").removeClass("active");
	$(this).addClass("active");
	$(".product-pic9").css("background-image",$(this).attr("data-pic"));
})

let up = document.querySelector('#up');

up.addEventListener('click', () =>
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
);

let trad = document.querySelector('#trad');
let favoriAdd = document.querySelector('.favori-add-button');
let favoriRemove = document.querySelector('.favori-add-button active-favori');
let tradContent = trad.textContent;

	function tradEng() {
		trad.innerHTML = "ENG";
		tradContent = "ENG";
	}

	function tradFr(){
		trad.innerHTML = "FR";
		tradContent = "FR";
	}

	trad.addEventListener('click',function(e) {
        if (tradContent == "FR"){
			tradEng()
		}
		else{
			tradFr()
		}

	})

	$(".favori-add-button").click(function(){
	$(this).toggleClass(" active-favori")
  })


  $(".boutique-menu-mobile-hover").click(function(){
    $(".boutique-menu-mobile").toggleClass(" active-menu-slide")
    })

    $(".boutique-menu-mobile-hover1").click(function(){
      $(".boutique-menu-mobile1").toggleClass(" active-menu-slide")
      })

      $(".boutique-menu-mobile-hover2").click(function(){
        $(".boutique-menu-mobile2").toggleClass(" active-menu-slide")
        })


	$(".product-picture-big-size").click(function(e){
		e.preventDefault();
		$(".product-picture-big-size-active").attr("src", $(this).attr("src"));
	})








// TEST NAVBAR MOBILE

$(document).ready(function() {
  
  $('.navbar-toggle').mouseenter(function() {
    if ($(this).hasClass('active')) {
    } else {
      $('.navbar-toggle').animate ({
          width: '60px',
          height: '60px'
        }, 200, function(){
          // anim complete
        });
    }
    });
  
  
    $('.navbar-toggle').mouseleave(function() {
      if ($(this).hasClass('active')) {} else {
    $('.navbar-toggle').animate ({
        width: '50px',
        height: '50px'
      }, 200, function(){
        // anim complete
      });
      }
  });
  
  
  
  
  
  $('.navbar-toggle').click(function() {
    var $this = $(this);
    
    if ($('.collapse').hasClass('open')) {
      $('.navbar > li').slideUp("fast");  
      $this.removeClass('active');
      $('.collapse').removeClass('open');  
      $this.animate ({
        width: '50px',
        height: '50px',
        borderBottomRightRadius: '12px'
      }, 200, function(){
        // anim complete
      });
      $('.close').hide('fast');
      setTimeout(function() {
        $this.children('.icon-bar').show("fast");
      }, 200);
    } 


    else {
      $this.delay("100").addClass('active');
      //$('.collapse').stop(true).slideDown("fast");
      $this.children('.icon-bar').hide();
      $this.delay("220").animate ({
        width: '95vw',
        height: '95vh',
        borderBottomRightRadius: '275px'
      }, 200, function(){
        // anim complete
      });
      setTimeout(function() {
        $('.navbar > li').slideDown("fast");
        $('.collapse').addClass('open');
        $('.close').show('fast');
      }, 500);
    }
  });
});


