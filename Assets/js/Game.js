


// quizz
// compte les vraie réponses
let count = 0;


// hover sur #riddler
$(".question:first > h2").hover(()=>{
    $("#riddler").css("color", "green");
    $("#riddler").css("font-size", "40px");
    $("#riddler").css("font-weight", "bold");
},
()=>{
    $("#riddler").css("color", "white");
    $("#riddler").css("font-weight", "normal");
})

// h2 fadeIn
$(document).ready(()=>{
    $("h2").fadeIn(3000);
})

// question 1 - 7
for (let i=0; i<=$(".question").length; i++){
    $(".chk"+i).click(()=>{
        // si value de l'actuel élément est "true"
    if($(`input[name='chk${i}']:checked`).val()=="true"){
        count++;
        console.log("its true " + count);

    }
    else{
        
        console.log("nope")
    }
    
    // affiche le resultat à lafin de la boucle
    if (i===$(".question").length){
        $(".batReponse").html(`<h3>Vous avez ${count} bonnes réponses</h3>`)
        


    }
    else if(i===$(".question").length-1){
        // h1 disparait avant l'affichage de la dernière élément
        $("h1:last").hide(1500);
    }
    // i commence à 0, l'élément séléctionné ne sera effacé qu'au prochain passage du boucle
    // alors qu'on veut le supprimer directement
    $(`.question:nth-child(${i + 1})`).hide(2000);
})
}
// // question 7


