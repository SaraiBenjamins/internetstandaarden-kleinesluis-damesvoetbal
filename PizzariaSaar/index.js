console.log("PizzariaSaar");

//Bron achtergrond: https://www.freepik.com/free-vector/gingham-pattern-red-background_48780360.htm#fromView=search&page=1&position=4&uuid=40b4b418-595e-4933-abb9-885d99687af7
//Bron pizza afbeeldingen: https://www.canva.com/design/DAF_ftsL4eU/Q9oKx75FcnyWjBcnGLwrUw/edit
//Bron audio: https://pixabay.com/ - https://cdn.pixabay.com/download/audio/2022/03/15/audio_45d0b3655a.mp3?filename=yummy-82939.mp3

//Bron: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//Bron: https://www.w3schools.com/js/js_const.asp
const mozzarellaButton = document.getElementById("mozzarella");
const salamiButton = document.getElementById("salami");
const paprikaButton = document.getElementById("paprika");
const hamButton = document.getElementById("ham");

const kaasalleenImg = document.getElementById("kaasalleen");
const salamialleenImg = document.getElementById("salamialleen");
const paprikaalleenImg = document.getElementById("paprikaalleen");
const hamalleenImg = document.getElementById("hamalleen");
const socheesyTekst = document.getElementById("socheesytekst");
const yummyAudio = document.getElementById("yummyaudio");
const bonAppetitTekst = document.getElementById('bonappetit');

//Bron: https://w3bits.com/javascript-toggle-display/
//Bron: Kennisclip Eventlisteners
mozzarellaButton.addEventListener("click", function() {
    toggleDisplay(kaasalleenImg);
    toggleDisplay(socheesyTekst);
});

salamiButton.addEventListener("click", function() {
    toggleDisplay(salamialleenImg);
});

paprikaButton.addEventListener("click", function() {
    toggleDisplay(paprikaalleenImg);
    yummyAudio.play();
});

hamButton.addEventListener("click", function() {
    toggleDisplay(hamalleenImg);
});

//Bron: Kennisclip Functies
verwijder.addEventListener("click", function() {
    kaasalleenImg.style.display = "none"; // Verberg alle toppingafbeeldingen en de socheesytekst
    salamialleenImg.style.display = "none";
    paprikaalleenImg.style.display = "none";
    hamalleenImg.style.display = "none";
    socheesyTekst.style.display = "none";
});


//Bron: Kennisclip IfElse
function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

//Bron: https://stackoverflow.com/questions/29800922/html-list-and-calculate-total-price
function berekenPizzaPrijs(ingrediënten) {
    const prijzen = {
        mozzarella: 1.5,
        salami: 2,
        paprika: 1,
        ham: 1.75
    };

    let totalePrijs = 5;

//Bron: https://www.w3schools.com/jsref/jsref_foreach.asp
//Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    ingrediënten.forEach(ingrediënt => {
        if (prijzen.hasOwnProperty(ingrediënt)) {
            totalePrijs += prijzen[ingrediënt];
        } else {
            console.log(`Ingrediënt ${ingrediënt} is niet beschikbaar.`);
        }
    });

    return totalePrijs;
}

//Bron: https://www.w3schools.com/java/java_arrays.asp
//Bron: https://www.w3schools.com/jsref/met_win_alert.asp
document.getElementById('buttonprijs').addEventListener('click', function() {
    const gekozenIngrediënten = ['salami', 'mozzarella', 'ham', 'paprika']; // Ingrediënten kiezen, bijvoorbeeld alleen salami en mozzarella
    const pizzaPrijs = berekenPizzaPrijs(gekozenIngrediënten);
    alert(`De totale prijs van de pizza is €${pizzaPrijs.toFixed(2)}.`);
});

document.getElementById('pizzaeten').addEventListener('click', function() {
    bonAppetitTekst.style.display = 'block'; // Toon de bon appetit tekst

//Bron: https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function() {
        bonAppetitTekst.style.display = 'none';
    }, 3000); // 3000 milliseconden = 3 seconden

});



