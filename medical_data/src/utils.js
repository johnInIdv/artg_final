// import * as d3 from 'd3';
//
// import {
// 	theData,
// } from './data';
//
//
function SayThis(){
  console.log("say this");
}
// const DoIt = function (){
// let riskData = [];
//   const theNewData = {
//    "symptoms":{
//      "age": document.getElementById("age").value,
//      "gender":document.getElementById("gender").value,
//      "location":document.getElementById("location").value,
//      "time":document.getElementById("time").value,
//      "pain":document.getElementById("pain").value,
//      "fever":document.getElementById("fever").checked,
//      "vomiting":document.getElementById("vomiting").checked,
//      "blood_in_vomit":document.getElementById("blood_in_vomit").checked,
//      "diarrhea":document.getElementById("diarrhea").checked,
//      "blood_in_stool": document.getElementById("blood_in_stool").checked,
//      "risk_factors": document.getElementById("risk_factors").checked,
//    }}
//
// console.log(theNewData);
// console.log(theData.abdomen[0].symptoms);
//   var i;
//   for (i = 0; i < 2; i++){
//     if ((theNewData.symptoms.age) == (theData.abdomen[i].symptoms.age)&&
//         (theNewData.symptoms.gender) == (theData.abdomen[i].symptoms.gender)&&
//         (theNewData.symptoms.location) == (theData.abdomen[i].symptoms.location)&&
//         (theNewData.symptoms.time) == (theData.abdomen[i].symptoms.time)&&
//         (theNewData.symptoms.pain) == (theData.abdomen[i].symptoms.pain)&&
//         (theNewData.symptoms.fever) == (theData.abdomen[i].symptoms.fever)&&
//         (theNewData.symptoms.vomiting) == (theData.abdomen[i].symptoms.vomiting)&&
//         (theNewData.symptoms.blood_in_vomit) == (theData.abdomen[i].symptoms.blood_in_vomit)&&
//         (theNewData.symptoms.diarrhea) == (theData.abdomen[i].symptoms.diarrhea)&&
//         (theNewData.symptoms.blood_in_stool) == (theData.abdomen[i].symptoms.blood_in_stool)&&
//         (theNewData.symptoms.risk_factors) == (theData.abdomen[i].symptoms.risk_factors)
//   ){
//     // return {theData[i]};
//     riskData.push(theData.abdomen[i].actions.risk);
//     // riskData.push(theData.abdomen[i].actions.risk);
//     console.log("the risk for this is: " + theData.abdomen[i].actions.risk);
//     console.log("the recommendation is to go to the: " + theData.abdomen[i].actions.recommendation);
//     }
//    else {console.log("not the same");}
// }
// UpdateBar(riskData);
// }
//
//
//
// const UpdateBar = function(data) {
// console.log(data);
//
// // set the dimensions and margins of the graph
// var margin = {top: 20, right: 20, bottom: 30, left: 40},
//     w = 900 - margin.left - margin.right,
//     h = 400 - margin.top - margin.bottom;
//
// // set the ranges
// var y = d3.scaleBand()
//           .range([h, 0])
//           .padding(0.1);
//
// var x = d3.scaleLinear()
//           .range([0, w]);
//
// // append the svg object to the body of the page
// // append a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var riskBar = d3.select("#svg").append("svg")
//     .attr("width", w + margin.left + margin.right)
//     .attr("height", h + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
//
// const color = d3.scaleOrdinal(d3.schemeCategory10);
//
// const bars = riskBar.selectAll('.bar')
//     .data(data);//will need to fiddle with the data
//
//   bars.select('rect')
//     .attr('fill','red')
//     .attr('h', 10)
//     .attr('w',50)
//     .attr('x',50)
//     .attr('y',50)
//
//   //enter
//   const barsEnter = bars.enter()
//       .append('g').attr('class','node');
//     barsEnter.append('rect')
//     .attr('height', 20)
//     .attr('width', d => d * 10)
//     .attr('x',60)
//     .attr("y", 50)
//     .attr('fill',color)
//       // .style('fill', 'yellow'); //circles in the ENTER selection are colored differently
//     barsEnter.append('text')
//       .attr('text-anchor', 'middle');
//
//       // UPDATE + ENTER
//     	// Both of their 'transform' attributes are the set the same way
//     	//so we merge them
//     	bars.merge(barsEnter)
//     		.transition()
//     		// .attr('transform', d => `translate(${d.x}, ${d.y})`);
//     	bars.merge(barsEnter)
//     		.select('text')
//     		.text('The Bar');
//     	bars.merge(barsEnter)
//     		.select('rect')
//     		.transition()
//     		.attr('h', 10)
//         .attr('w',d => d * 10)
//         .attr('x',20)
//         .attr("y", 50)
//         .attr('fill',color)
// }
//
//
//
export {
  SayThis
}
