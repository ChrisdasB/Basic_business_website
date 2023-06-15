$(document).ready(function() {

// Offset for scrolling the page
var offsetY = 70;

// Variables to hold currently opened containers and buttons
var activeContainer;
var activeContainerBtn;



// NavBar OnClick eventlistener init
$('#nav-services').on('click', () => {
    ScrollToService();
})

$('#nav-support').on('click', () => {
    ScrollToSupport();
})

$('#nav-partners').on('click', () => {
    console.log("Click");
    ScrollToPartners();
})

$('#nav-contact').on('click', () => {    
    ScrollToContact();
})

// Inital blend in of start-text
$('.start-text-container').animate({'opacity':'1'},1500); 

// Init hiding of all info-boxes
$('.info-container').hide();
// Get all ok buttons in info-boxes
var okButtons = document.getElementsByClassName('info-ok-btn');
// Add eventlisteners to all info-boxes buttons - Scroll back to service and after 0.4 seconds close infocontainer
for(var i = 0; i< okButtons.length; i++)
{
    okButtons[i].addEventListener("click", () => {
        setTimeout(function () {            
            activeContainer.hide();
        }, 400);
        ScrollToService();
    });
}

    

    // Add eventlisteners to all 'learn more' buttons in services card
    $('.info-open-btn').on( "click", function() 
    {        
        // If there is a currently active container, hide it
        if(activeContainer != null) {activeContainer.hide();}
        // Get the custom attribute number from clicked button
        var myAttribute = $(this).attr('myNumber');
        // Get the right info-box depending on the number        
        if(myAttribute == '1') {activeContainer = $("#hardware-info");} 
        else if(myAttribute == '2') {activeContainer = $("#software-info");}
        else if(myAttribute == '3') {activeContainer = $("#repairs-info");}
        // Get the now active button from info-box
        activeContainerBtn = activeContainer.children('#info-ok');
        // Show the info-box
        activeContainer.show();
        // Scroll to info-box
        ScrollToElement(activeContainer);   
    });

    // Check on every scroll
    $(window).scroll(function(){
    
        // get all elements with the .init-fade-out class
        $('.init-fade-out').each( function(i){
            
            // Get the top position from the current element
            var bottom_of_object = $(this).offset().top;
            // Get the bottom position of screen
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            // If the bottom of the screen is further down the top of the card
            if( bottom_of_window > bottom_of_object ){ 
                // Start fade-in animation 
                $(this).animate({'opacity':'1'},1000);                    
            }            
        }); 
    
    });

    // Functions
    function ScrollToService() 
    {
        $('html, body').scrollTop($("#services").offset().top - offsetY);
    }

    function ScrollToSupport() {
        $('html, body').scrollTop($("#support").offset().top - offsetY);
    }

    function ScrollToPartners()
    {
        $('html, body').scrollTop($("#partners").offset().top - offsetY);
    }

    function ScrollToContact() 
    {
        $('html, body').scrollTop($("#contact").offset().top - offsetY);
    }

    function ScrollToElement(element) 
    {
        $('html, body').scrollTop(element.offset().top - offsetY -150);
    }
});



