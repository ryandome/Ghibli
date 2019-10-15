var setBanner = function(message)
{
   d3.select("#banner")
             .text(message)}


var ghibliPromise = d3.json("https://ghibliapi.herokuapp.com/films")

ghibliPromise.then(
function(data)
{
    setBanner("Select a film");
    console.log("works",data);
},
function(err)
{
    console.log("broken",err);
    
})   



var displayInfo = function(films)
{
  var box = d3.select("#one").append("div");
    var items = box.selectAll("p").data(films).enter().append("p");
    items.append("span").text(function(d){
        return(d).title;
});
}
    

ghibliPromise.then(
function(data)
{
    displayInfo(data);
    console.log("works",data);
},
function(err)
{
    console.log("broken",err);
    
})   

 var displayData = function(director)
 {
     var boxes = d3.select("#two").append("div");
     var item = boxes.selectAll("p").data(director).enter().append("p")
     item.append("span").text(function(p){
         return(p).director;
});
     
 }
 
 ghibliPromise.then(
function(data)
{
    displayData(data);
    console.log("works",data);
},
function(err)
{
    console.log("broken",err);
    
})   

