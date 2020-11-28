//logo animation
anime({
    targets: '.logo polygon, .logo image, .logo path',
    fillOpacity: [0, 1],
    loop: false,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: (el, i) => { return i * 70 },
    complete: function(anim) {
            
        setTimeout(() =>  {
            //resize logo
            if( $(window).width() < 400){
                $("svg").height('200px');
            } else if( $(window).width() < 500){
                $("svg").height('250px');
            } else if( $(window).width() < 800){
                $("svg").height('320px');
            } else {
                $("svg").height('450px');
            }
            
            //show body
            $( "#logo" ).even().addClass( "logo-after" );
            setTimeout(() =>  {
                $( "#coming-soon-text" ).even().addClass( "coming-soon-text-reveal" );
                $("img").show('slow');
            }, 1000);        
        }, 2000);        

        $( ".backline" ).show('slow');
        //backline animation
        anime({
            targets: '.backline polygon, .backline path, .backline rect',
            opacity: [0.2, 1],
            loop: true,
            direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: (e, i) =>  500,
        })

    }
});