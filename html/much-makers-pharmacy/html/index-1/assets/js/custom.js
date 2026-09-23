/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Machine For Hire
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var PharmaShop = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} 
			else {
				return;
			}
		/*-------------- Pharma Shop Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
			this.submenu_toggle();
			this.main_banner_slider();
			this.ps_testimonial_slider();
			this.ps_partner_slider();
			this.bottom_top();
			this.loader();
		},
		
		/*-------------- Pharma Shop Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/

		// sub menu start
		submenu_toggle: function() {
			$('.ps-title').click(function(j) {
			
			var dropDown = $(this).closest('.ps-menu-children').find('.ps-submenu');
			$(this).closest('.ps-toggle').find('.ps-submenu').not(dropDown).slideUp();
			
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.ps-toggle').find('.ps-title.active').removeClass('active');
				$(this).addClass('active');
			}
			
			dropDown.stop(false, true).slideToggle();
			j.preventDefault();
			})
		},
		// sub menu end

		// banner slider			
			main_banner_slider: function () {
				var swiper = new Swiper('.ps-banner-swiper-main-wrapper .swiper-container', {
					loop: true,
					speed: 1500,
					cubeEffect: {
						slideShadows: false,
					},
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: '.ps-banner-slider-btn .swiper-button-next',
						prevEl: '.ps-banner-slider-btn .swiper-button-prev',
					},
					
				});
			},
		// banner slider
		// testimonials slider			
		ps_testimonial_slider: function () {
				var swiper = new Swiper('.ps-testmonial-slider-wrapper .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 1000,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.ps-testmonial-slider-wrapper .swiper-pagination',
						clickable: true,
					},
				
					breakpoints: {
						1199: {
						  slidesPerView: 3,
						  spaceBetween: 30,
						},
						992: {
						  slidesPerView: 3,
						  spaceBetween: 30,
						},
						768: {
						  slidesPerView: 2,
						  spaceBetween: 30,
						},
						575: {
						  slidesPerView: 2,
						  spaceBetween: 15,
						},
						320: {
						  slidesPerView: 1,
						  spaceBetween: 15,
						}
					}
				});
			},
		// testimonial slider
		// partner slider			
		ps_partner_slider: function () {
			var swiper = new Swiper('.ps-partner-main-wrapper .swiper-container', {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: true,
				speed: 1000,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},				
				breakpoints: {
					1199: {
					  slidesPerView: 6,
					  spaceBetween: 30,
					},
					992: {
					  slidesPerView: 5,
					  spaceBetween: 30,
					},
					768: {
					  slidesPerView: 4,
					  spaceBetween: 30,
					},
					575: {
					  slidesPerView: 3,
					  spaceBetween: 15,
					},
					320: {
					  slidesPerView: 1,
					  spaceBetween: 15,
					}
				}
			});
		},
	// partner slider
	// Bottom To Top
	bottom_top: function(){  
		if($('#button').length > 0){
			
			var btn = $('#button');

			$(window).scroll(function() {
			  if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			  } else {
				btn.removeClass('show');
			  }
			});

			btn.on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({scrollTop:0}, '300');
			});
		}
	},
// Bottom To Top
// loader			
		loader: function () {
		jQuery(window).on('load', function() {
			$(".loader").fadeOut();
			$(".spinner").delay(500).fadeOut("slow");
		});
	}, 
		// loader
	
	};
	PharmaShop.init();	

}(jQuery));	

// sign in popup
$(".login").on('click',function(){
	$("body").addClass('ps-signin-popup_open');
  });
	$(".close").on('click',function(){
	$("body").removeClass('ps-signin-popup_open');

  });

// register popup
  $(".register").on('click',function(){
	$("body").removeClass('ps-signin-popup_open');
	$("body").addClass('ps-register-popup_open');
  });
	$(".close").on('click',function(){
	$("body").removeClass('ps-register-popup_open');

  });

// toggle menu

  	$('.ps-toggle-btn').on('click',function(){
			$('body').toggleClass('menu_open');
		})


 //On scroll fixed menu
 $(window).scroll(function() {
	var wh = window.innerWidth;
	if (wh > 767) {
		var h = window.innerHeight;
		var window_top = $(window).scrollTop() + 1;
		if (window_top > 100) {
			$('.ps-navigation-wrapper').addClass('ps-navbar-fixed');
		} else {
			$('.ps-navigation-wrapper').removeClass('ps-navbar-fixed');
		}
	}
});


;
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  let cardsHTML = "";

  medicines.forEach(function (med) {
    cardsHTML += `
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ps-product-box medicine-card" data-id="${med.id}">
          <div class="medicine-images">
          <img src="${med.frontImage}" alt="${med.name} front" class="zoomable" />
          <img src="${med.backImage}" alt="${med.name} back" class="zoomable" />
          </div>
          <div class="ps-product-info">
            <h4>${med.name}</h4>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = cardsHTML;
}

document.addEventListener("DOMContentLoaded", renderProducts);

// ============================================
// ZOOM MODAL FUNCTIONALITY
// ============================================

function initZoomModal() {
  const modal = document.getElementById("zoom-modal");
  const modalImg = document.getElementById("zoom-modal-img");
  const closeBtn = document.querySelector(".zoom-modal-close");

  // Safety check
  if (!modal || !modalImg) return;

 
 // Listen on the whole page for clicks on any image with class "zoomable"
document.body.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG" && event.target.classList.contains("zoomable")) {
    modalImg.src = event.target.src;
    modal.classList.add("active");
  }
});

  // 2. Close when clicking the X button
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }

  // 3. Close when clicking the dark background (but NOT the image)
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  // 4. Close when pressing the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.remove("active");
    }
  });
}

// Run this after the page loads
document.addEventListener("DOMContentLoaded", initZoomModal);

// ============================================
// CLOSE MOBILE MENU ON LINK CLICK
// ============================================
document.addEventListener("click", function (event) {
  // Only handle clicks on anchor links inside .ps-navbar
  const link = event.target.closest(".ps-navbar a");
  if (!link) return;

  // Remove the menu_open class from body → closes the menu
  document.body.classList.remove("menu_open");
});