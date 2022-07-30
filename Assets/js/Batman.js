// button hover
$(document).ready(()=>{
    $(".btn-hero").hover(()=>{
        $(".btn-hero").css({background : "linear-gradient(to right, rgba(255,255,255, 1), rgba(137,0,8,1)"});    
    },
    function(){
        $(".btn-hero").css({background : "linear-gradient(to right, rgba(255,255,255, 0.4), rgba(137,0,8,0.4)"})
    }
    );
});

$(document).ready(()=>{
    $(".btn-foes").hover(()=>{
        $(".btn-foes").css({background : "linear-gradient(to right, rgba(255,255,255, 1), rgba(137,0,8,1)"});    
    },
    function(){
        $(".btn-foes").css({background : "linear-gradient(to right, rgba(255,255,255, 0.4), rgba(137,0,8,0.4)"})
    }
    );
});
// pop up effects
$(document).ready(()=>{
    $("#confirm").hover(()=>{
        $("#confirm").css({background : "linear-gradient(to right, rgba(137,0,8,1), rgba(255,255,255, 1)"})
        $("#confirm").css("font-weight", "bold");
        
            
    },
    function(){
        $("#confirm").css({background : "linear-gradient(to right, rgba(255,255,255, 1), rgba(137,0,8,1)"})
        $("#confirm").css("font-weight", "normal")
    }
    );
});
$(document).ready(()=>{
    $("#close-pop-up").hover(()=>{
        $("#close-pop-up").css({background : "linear-gradient(to right, rgba(137,0,8,1), rgba(255,255,255, 1)"})
        $("#close-pop-up").css("font-weight", "bold");
            
    },
    function(){
        $("#close-pop-up").css({background : "linear-gradient(to right, rgba(255,255,255, 1), rgba(137,0,8,1)"})
        $("#close-pop-up").css("font-weight", "normal")
    }
    );
});



// social hover
let Mysvg = document.getElementsByClassName("my-svg");

for(let i = 0; i<Mysvg.length;i++){
    Mysvg[i].addEventListener("mouseover", ()=>{
        Mysvg[i].style.fill = "#FFFF00";
        Mysvg[i].style.cursor = "pointer";

    });
    Mysvg[i].addEventListener("mouseout", ()=>{
        Mysvg[i].style.fill = "white";
    })
}
let batarang = document.getElementsByClassName("batarang");
for(let i = 0; i<batarang.length;i++){
    batarang[i].addEventListener("mouseover",()=>{
        batarang[i].style.cursor="pointer";
    })
}

// .social scrolling
$(document).ready(()=>{
    $(window).scroll(()=>{
        let batScroll = $(window).scrollTop();
        $(".social").css("top", batScroll + 'px');
    })
})
// fadeIn des titres
$(window).scroll(()=>{
    $("h1").animate({
        left:"0px"
    }, 2000);
    
})

// reveal on scroll
$(document).scroll(()=>{
        $(".reveal, .para").fadeIn(3000);
        
        $(".card-image img:first").fadeIn(1000);
        $(".card-image img:even").fadeIn(2000);
        $(".card-image img:odd").fadeIn(1500);
    },
    )
// reveal on ready
$(document).ready(()=>{
    $(".bio").animate({
        left:"0px"
    }, 2000);
    $("#heIs").fadeIn(4000);
    
})



// zoom on hover
let reveal = document.querySelectorAll(".card-image > img");
let actor = document.getElementsByClassName("actor");



for (let i = 0; i<reveal.length; i++){
    reveal[i].addEventListener("mouseover", function(){
        reveal[i].style.transform = "scale(1.1)";
        
        actor[i].style.display = "inherit";
        actor[i].style.transform = "scale(1.1)";
        
    });
    reveal[i].addEventListener("mouseout", ()=>{
        reveal[i].style.transform = "scale(1)";
        
        actor[i].style.display = "none";
        actor[i].style.transform = "scale(1)";
    })
}
for (let i = 0; i<reveal.length; i++){
    actor[i].addEventListener("mouseover", function(){
        reveal[i].style.transform = "scale(1.1)";
        
        actor[i].style.display = "inherit";
        actor[i].style.transform = "scale(1.1)";
        
    });
    actor[i].addEventListener("mouseout", ()=>{
        reveal[i].style.transform = "scale(1)";
        
        actor[i].style.display = "none";
        actor[i].style.transform = "scale(1)";
    })
}



// .slider-show setting

let batPics =["Batslider1.png","Batslider2.png", "Batslider3.png","Batslider4.png","Batslider5.png","Batslider6.png","Batslider7.png","Batslider8.png","Batslider9.png","Batslider10.png"]
let i=0;

function slideImage(){
    document.slider.src =`./Assets/Illustrations/Home/${batPics[i]}` ;
    if(i<batPics.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideImage()",3000);
}
window.onload = slideImage();

// multimedia setting
    // next function
$(".next").click(function(){
    // on cache les premiers éléments du slider et de la bande annonce
    $(".movie-description").first().hide();
    $(".bande-annonce iframe").first().hide();
    // on affinche les éléments suivant
    $(".movie-description").first().next().css({display : "flex"});
    $(".bande-annonce iframe").first().next().show();
    $(".next").click(function(){
        // même principe
        $(".movie-description").first().next().hide();
        $(".bande-annonce iframe").first().next().hide();

        $(".movie-description").last().css({display : "flex"});
        $(".bande-annonce iframe").last().show();

    })
    
})
    // prev function
$(".prev").click(function(){
        
    $(".movie-description").last().hide();
    $(".bande-annonce iframe").last().hide();
    
    $(".movie-description").last().prev().css({display : "flex"});
    $(".bande-annonce iframe").last().prev().show();
    $(".prev").click(function(){
        $(".movie-description").last().prev().hide();
        $(".bande-annonce iframe").last().prev().hide();

        $(".movie-description").first().css({display : "flex"});
        $(".bande-annonce iframe").first().show();
    })
        
})
// .contact pop up boxes
$(document).ready(()=>{
    $("#confirm").click(()=>{
        $("#modal").show();
    })
});
$(document).ready(()=>{
    $("#close-pop-up").click(()=>{
        $("#modal").hide();
    })
});




// .quotes section
$(".quotes q").first().show();

for (i=1;i<$(".quotes p").length+1;i++){
    let d = i;
    $(".quotes").hover(()=>{
        
        $(`.bat-quotes:nth-child(${d+1})`).hide();
    })
}




