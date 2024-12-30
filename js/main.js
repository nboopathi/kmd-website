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

let currentIndex = 1; // Initially selected index
// detailsSection.style.display = 'none';
// imageBox.style.display = 'none';

// Function to update content based on the selected item
function updateContent(target) {
    if (target === 'content2') {
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
        previewImage.src = 'img/service-rooftop-1.jpg';
        carouselContainer.style.display = 'none'; // Hide carousel for other content
    } else if (target === 'content3') {
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
        previewImage.src = 'img/service-ground-mounted-1.jpg';
        carouselContainer.style.display = 'none'; // Hide carousel for other content
    } else if (target === 'content1') {
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
        previewImage.src = 'img/KMDServices-1.jpg';
        carouselContainer.style.display = 'none'; // Hide carousel for other content
    } else if (target === 'content4') {
        detailsHeading.textContent = 'Vehicles';
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
}

// Mark the first item as active initially
dropdownItems.forEach((item, index) => {
    if (index === 0) {
        item.classList.add('open'); // Add the 'open' class to the first item
        const target = item.getAttribute('data-target');
        updateContent(target); // Load the content for the first item
    }

    item.addEventListener('click', () => {
        // Remove the 'open' class from all other list items
        dropdownItems.forEach(li => li.classList.remove('open'));

        // Add the 'open' class to the current list item
        item.classList.add('open');

        // Update content dynamically based on the clicked item
        const target = item.getAttribute('data-target');
        updateContent(target);
    });
});

// Owl Carousel Initialization
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

    const gallery = document.getElementById("gallery");

    // Function to load images dynamically
    function loadImages(path, total, formats) {
        for (let i = 1; i <= total; i++) {
            let imageAdded = false;
    
            for (const format of formats) {
                const img = new Image();
                img.src = `${path}${i}.${format}`;
                img.className = "img-responsive";
    
                img.onload = function () {
                    gallery.appendChild(img);
                    imageAdded = true;
                };
    
                if (imageAdded) break;
            }
        }
    }
    
    // Function to load videos dynamically
    function loadVideos(path, total, formats) {
        for (let i = 1; i <= total; i++) {
            let videoAdded = false;
    
            for (const format of formats) {
                const video = document.createElement("video");
                video.controls = true;
                video.className = "vid";
    
                const source = document.createElement("source");
                source.src = `${path}${i}.${format}`;
                source.type = `video/${format}`;
                video.appendChild(source);
    
                // Check if the video loads successfully
                video.onloadeddata = function () {
                    gallery.appendChild(video);
                    videoAdded = true;
                };
    
                if (videoAdded) break;
            }
        }
    }
    
    // Load images from img/graphics/
    loadImages("img/gallery/", 100, ["jpg", "png", "jpeg"]);
    loadImages("img/graphics/", 10, ["jpg", "png", "jpeg"]); // Adjust the total count as needed
    loadImages("img/vechile/", 10, ["jpg", "png", "jpeg"]);
    // Load videos from img/video/
    loadVideos("img/video/", 10, ["mp4", "mpeg4"]); // Adjust the total count as needed
})(jQuery);