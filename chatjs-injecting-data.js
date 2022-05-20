 
 
 // creating empty arrays to host data
let lista = [];
let listb = [];
 
 // injecting data with loops into the arrays 
for (let a = 0; a < 133; a = a + 2) {
  lista.push(a++);
}
for (let b = 1; b < 155; b = b + 5) {
  listb.push(b);
}
   
// storing data with in the suitable format 
   
let hunger = { lista, listb };
let result =[];
for (let f = 0, h = 0; f < lista.length; f++, h++) {
let data = { x: hunger.lista[f], y: hunger.listb[h] };
 result.push(data)  
} 
 
//  debuggin the value of "result" 

 // console.log(result);
   console.log(lista); 
   console.info(listb);
 console.log(listb);
 


// Assiging the value to Chat.js variable
let xyValues = result;

 // creating a new instance of the chart.js
new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      // Assign the values of our variable result to data !
      data: xyValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 0, max:200}}],
      yAxes: [{ticks: {min: 0, max:200}}],
    }
  }
});
   
 
 

