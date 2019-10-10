var setBanner = function(message)
{
   d3.select("#banner")
             .text(message)}


var ghibliPromise = d3.json("https://ghibliapi.herokuapp.com/films")

ghibliPromise.then(
function(data)
{
   setBanner("select a film");
    console.log("works",data);
},
function(err)
{
    console.log("broken",err);
    
}





)   
