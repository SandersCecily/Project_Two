// Buttons and Grabbers
const ageverify = document.getElementById("age-verify");
const perferalc = document.getElementById("perfalc");
const recipenum = document.getElementById("recipe-num");
const resultdiv = document.getElementById("drink");


    document.getElementById("submitBtn").addEventListener("click", function(event) {
      event.preventDefault();

      //gets true false value
      var alc_allowed = ageverify.options[ageverify.selectedIndex].value;
      console.log(alc_allowed);
      
      //gets the perfered alcohols
      var perfered = perferalc.options[perferalc.selectedIndex].value;

      //gets the amount of recipes to 
      var numofrecipes = recipenum.options[recipenum.selectedIndex].value;

      // Building AJAX Call
      if (alc_allowed==="true"){
        var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + perfered;
        console.log("Query: " + queryUrl + "\n"+
        "Number of Requests: " + numofrecipes);
        ajaxCallGet(queryUrl, numofrecipes);
      }
      else{
        var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
        console.log("Query: " + queryUrl + "\n"+
        "Number of Requests: " + numofrecipes);
        ajaxCallGet(queryUrl, numofrecipes);
      }
      
    

    }); //end on load

function ajaxCallGet(query, num){
  $.ajax({
    url: query,
    method: "GET",
    success: function(response) {
      console.log(response);
      var responseArray = response.drinks;
      var randomDrinkIDs= [];
      while (randomDrinkIDs.length<num){
        var newdrinkid = Math.floor(Math.random()*responseArray.length);
        var newdrink = response.drinks[newdrinkid].idDrink;
        randomDrinkIDs.push(newdrink);
      }
      console.log(randomDrinkIDs);
      for(let i = 0; i< randomDrinkIDs.length; i++){
        ajaxCallPost(randomDrinkIDs[i]);
      }
    }});
 }//end ajaxget


  function ajaxCallPost (arr){
    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + arr,
      method: "POST",
      success: function (response){
        console.log(response.drinks[0]);

        //make div
        var div = document.createElement("div");
        

        //make h1 with title
        var head = document.createElement("H1");
        var headtitle = document.createTextNode(response.drinks[0].strDrink);

        //appending
        head.appendChild(headtitle);
        div.appendChild(head);

        //create img format and append
        var img = document.createElement("img");
        img.setAttribute("src", response.drinks[0].strDrinkThumb);
        img.setAttribute("width", "175");
        img.setAttribute("height", "auto");
        img.setAttribute("alt", "Drink Image");
        div.appendChild(img);

        //adding breaks
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createTextNode("Ingredients: "));
        div.appendChild(document.createElement("br"));

        //ingredients list
        var list = document.createElement("ul");
        if (response.drinks[0].strIngredient1 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient2 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient3 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient4 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient5 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient6 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient7 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient8 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient9 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient10 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient11 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient12 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient13 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient14 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14));
          list.appendChild(listitem);
        }
        if (response.drinks[0].strIngredient15 != ""){
          var listitem = document.createElement("li");
          listitem.appendChild(document.createTextNode(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15));
          list.appendChild(listitem);
        }
        div.appendChild(list);

        //add instructions and add to website
        div.appendChild(document.createElement("br"));
        var str = "Instructions: ";
        str += response.drinks[0].strInstructions;
        var content = document.createTextNode(str);
        div.appendChild(content);
        resultdiv.appendChild(div);

        

      },

      
      

    });
  }

 
