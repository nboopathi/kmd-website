(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    
    var $question = $('.question');
	var $answer = $('.answer');

	$question.click(function(){

		// Hide all answers
		$answer.slideUp();

		// Check if this answer is already open
		if($(this).hasClass('open')){
			// If already open, remove 'open' class and hide answer
			$(this).removeClass('open')
			       .next($answer).slideUp();
		// If it is not open...
		}else{
			// Remove 'open' class from all other questions
			$question.removeClass('open');
			// Open this answer and add 'open' class
			$(this).addClass('open')
			       .next($answer).slideDown();
				   
		}
	});

    // $(document).ready(function(){
        $("img").click(function(){
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
        $("#myModal").modal();
      });
      
      $("video").click(function(){
        var v = $("video > source");
        var t = v.attr("src");
        $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
        $("#myModal").modal();  
      });
    //   });//EOF Document.ready
    



// JavaScript for Dropdown Behavior
const dropdownItems = document.querySelectorAll('.dropdown li');
const detailsSection = document.getElementById('details');
const imageBox = document.getElementById('image-box');
const detailsHeading = document.getElementById('details-heading');
const detailsContent = document.getElementById('details-content');
const previewImage = document.getElementById('preview-image');
const carouselContainer = document.getElementById('custom-carousel');

let currentIndex = 0;
detailsSection.style.display = 'none';
imageBox.style.display = 'none';

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
    $('.container-servce').css('width','100%');
    // Show the details and image sections
    detailsSection.classList.add('active');
    imageBox.classList.add('active');

    // Update content dynamically based on the clicked item
    const target = item.getAttribute('data-target');
    if (target === 'content1') {
        detailsHeading.textContent = 'Rooftop Solar Installations';
        detailsContent.innerHTML = `
                                <p>Explore the benefits of solar energy and why <b style="color: #32C36C;">KM Developers</b>
                                <ul>
                                    <li>Rooftop Site Survey and Drawing.</li>
                                    <li>Materials Supply and Arrangements</li>
                                    <li>Flexible Loan Arrangements</li>
                                    <li>Net Metering Policy</li>
                                    <li>Solar Rooftop Installations & Commissioning</li>
                                    <li>Maintenance Service and Monitoring</li>
                                </ul>
                            `;
        previewImage.style.display = 'block';
        detailsSection.style.display = 'block';
        imageBox.style.display = 'block';
        previewImage.src = 'img/service-rooftop.png';
        carouselContainer.style.display = 'none'; // Hide carousel for other content
    } else if (target === 'content2') {
        detailsHeading.textContent = 'Ground Mounted Solar Plant';
        detailsContent.innerHTML = `
                                <p>Explore Technology Lab initiatives such as:</p>
                                <ul>
                                     <li>Pile Foundation with Module Erection</li>
                                     <li>Construction of Civil Activities</li>
                                     <li>Electrical DC Activities</li>
                                     <li>Internal Road and Fencing</li>
                                </ul>
                            `;
        previewImage.style.display = 'block';
        detailsSection.style.display = 'block';
        imageBox.style.display = 'block';
        previewImage.src = 'img/service-ground-mounted.png';
        carouselContainer.style.display = 'none'; // Hide carousel for other content
    } else if (target === 'content3') {
        detailsHeading.textContent = 'KMD Services';
        detailsContent.innerHTML = `
                                <p>Our Services:</p>
                                <ul>
                                    <li>Foundation of Renewable Energy</li>
                                    <li>Construction of Civil Activities</li>
                                    <li>Electrical DC Activities</li>
                                    <li>Roads and Fencing Activities</li>
                                </ul>
                            `;
        previewImage.style.display = 'block';
        detailsSection.style.display = 'block';
        imageBox.style.display = 'block';
        previewImage.src = 'img/carousel-3.png';
        carouselContainer.style.display = 'none'; // Hide carousel for other content
    } else if (target === 'content4') {
        detailsHeading.textContent = 'Vechiles';
        detailsContent.innerHTML = `
                                <p><b style="color: #32C36C;">KM Developers</b> tie up with Thamirabarani RMC Plants and SSS Blue Matel units of RSDCPL at Various location in Tamilnadu</p>
                                <ul>
                                    <li>Mobile Concrete Mixers - 3 unit</li>
                                    <li>DTH Drilling Vehicles - 3 unit</li>
                                    <li>Shuttering Materials with Scaffolding 5000 Sqft and Accessories</li>
                                </ul>
                            `;
        previewImage.style.display = 'none';
        detailsSection.style.display = 'block';
        imageBox.style.display = 'block';
        carouselContainer.style.display = 'block'; // Show carousel for content 3
    }
    });
});

$(document).ready(function () {
    $("#custom-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["&#10094;", "&#10095;"], // New arrow symbols
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          },
          1600: {
            items: 1
          }
        }
      });
  });
  document.querySelectorAll('.dropdown li').forEach(function (item) {
    item.addEventListener('click', function () {
        // Remove the 'open' class from all other list items
        document.querySelectorAll('.dropdown li').forEach(function (li) {
            if (li !== item) {
                li.classList.remove('open');
            }
        });

        // Toggle the 'open' class on the current list item
        this.classList.toggle('open');
    });
  });
})(jQuery);