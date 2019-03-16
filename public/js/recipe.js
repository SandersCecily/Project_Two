function ajaxCallPost() {

var selectedNumber;

var selectedAllergy;
  
var ingredient = $("#dishType").val().trim()
console.log(ingredient)

var selectedNumber = $("#numOfDish  > option:selected").each(function() {
     {
        selectedNumber = $(this).val()
      //   return false;
    }
    console.log(selectedNumber)
})

var selectedAllergy = $("#optionsRadios:checkbox:checked").length > 0


$.ajax("/api/recipe/search/", {
    type: "POST",
    data: {
      ingredient,
      selectedNumber,
      selectedAllergy
      }
  }).then(
    function(response){ 
      
      var results = response.body.results;

      for (var i = 0; i < results.length; i++) {

      let recipeDiv = $("<div class='recipes'>");

     let recipeName = results[i].title 
    
     let recipeImage = results[i].image

     let recipeLink = results[i].sourceUrl

     let ahref = $("<ahref>").text("Recipe Link: " + recipeLink)

      let h1 = $("<h1>").text("Recipe Title: " + recipeName)

      let image = $("<img>")

      image.attr("src", recipeImage)
      
      

      recipeDiv.append(h1)
      recipeDiv.append(image)
      recipeDiv.append(ahref)
        
      
      $("#food").append(recipeDiv)
      }

    });
}

$("#submitBtn").on("click", function(event) {
    ajaxCallPost();
});
