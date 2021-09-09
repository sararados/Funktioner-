const knapp = document.getElementById("save");
const namn = document.getElementById("namn");


knapp.addEventListener("click", function(){

    namn.value = namn.value.toUpperCase();

    console.log(namn.value);

});
