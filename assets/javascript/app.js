var animals = [null]

function displayAnimal(){
    $("#animals").emtpy();
var animal = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    var animalDiv = $("<div class='animal'>");

    var imgURL =response.Poster;

    var image = $("<img>").attr("src",imgURL);

    animalDiv.append(image);

    function renderButtons() {
    
        $("#animals").emtpy();
        for (var i = 0; animals.length; i++) {
            var a = $("<button>");
            a.addClass("animal-btn");
            a.attr("data-name",animals[i]);
            a.text(animals[i]);
            $("#animal-view").append(a);
        }    
    }
("#add-animal").on("click"),function(event) {
    event.preventDefault();

    var animal = $("#animal-input").val().trim();
    animals.push(animal);

    renderButtons();
}
})
};
$(document).on("click", ".animal-btn", displayAnimal);
renderButtons();
