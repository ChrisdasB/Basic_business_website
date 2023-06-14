$(document).ready(function() {
    // Init
var offsetY = 70;

var activeContainer;
var activeContainerBtn;



// NavBar
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

$('.start-text-container').animate({'opacity':'1'},1500); 



var okButtons = document.getElementsByClassName('info-ok-btn');
for(var i = 0; i< okButtons.length; i++)
{
    okButtons[i].addEventListener("click", () => {
        setTimeout(function () {            
            activeContainer.hide();
        }, 400);
        ScrollToService();
    });
}

    $('.info-container').hide();

    // Button events
    $('.info-open-btn').on( "click", function() 
    {        
        if(activeContainer != null) {activeContainer.hide();}
        var myAttribute = $(this).attr('myNumber');
        console.log(myAttribute);
        if(myAttribute == '1') {activeContainer = $("#hardware-info");} 
        else if(myAttribute == '2') {activeContainer = $("#software-info");}
        else if(myAttribute == '3') {activeContainer = $("#repairs-info");}
        
        activeContainerBtn = activeContainer.children('#info-ok');
        activeContainer.show();
        ScrollToElement(activeContainer);   
    });


    $(window).scroll(function(){
    
        /* Check the location of each desired element */
        $('.init-fade-out').each( function(i){
            
            var bottom_of_object = $(this).offset().top;
            var top_of_object = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();

            if( bottom_of_window > bottom_of_object ){  
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
        $('html, body').scrollTop(element.offset().top - offsetY -100);
    }

});



