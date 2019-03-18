function displayResults() {

var selectedNumber;

var selectedAllergy;
  
var ingredient = $("#ingredient").val().trim();
console.log(ingredient)

var allergies = $("#allergies input[name=optionsRadios]:checked").each(function() {
  {
       selectedAllergy = $(this).val()
  
   }
   console.log(selectedAllergy)
})

var numberOfRecipes= $("#numOfDishes > option:selected").each(function() {
    {
      selectedNumber = $(this).val()
    }
    console.log(selectedNumber)
  
  })

  $.ajax("/api/recipe/search", {
    type: "POST",
    data: {
      ingredient,
      selectedAllergy,
      selectedNumber
      

    }
  }).then(
    function(response){ 

      
      console.log(response)
      
      var results = response.body.results;

      for (var i = 0; i < results.length; i++) {

      let recipeDiv = $("<div class='recipes'>");

     let recipeName = results[i].title 
    
     let recipeImage = results[i].image

    //  let recipeInstructions = results[i].source

      let h1 = $("<h1>").text("Recipe Title: " + recipeName)

      let image = $("<img>")

      // let link = $("[href]=" + sourceUrl)

      image.attr("src", recipeImage)
      
      

      recipeDiv.append(h1)
      recipeDiv.append(image)
      // recipeDiv.append(link)
      }
    })
  }
    
  $("#submitBtn").on("click", function() {
    displayResults()
  })

