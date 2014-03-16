// Block Library Test

document.addEventListener('DOMComponentsLoaded', function(evt){
    var deck = document.getElementById("views");
    var nextButton = document.getElementById("view-next");
    var prevButton = document.getElementById("view-prev"); 

    // Add event listeners so that when we click the buttons, our views transition between one another
    prevButton.addEventListener("click", function(){ deck.previousCard(); }); 
    nextButton.addEventListener("click", function(){ deck.nextCard(); });

});