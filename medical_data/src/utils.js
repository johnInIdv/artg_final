import * as d3 from 'd3';

import {
	theData,
} from './data';

// const abdomenForm = function(){
//
//   document.getElementById('abdomenForm').style.display = 'none';
//   document.getElementById('kneeForm').style.z-index = 'absolute';
// }

function SayThis(){
  console.log("say this");
}

let riskData;
function doIt(){

  const theNewData = {
   "symptoms":{
     "age": document.getElementById("age").value,
     "gender":document.getElementById("gender").value,
     "location":document.getElementById("location").value,
     "time":document.getElementById("time").value,
     "pain":document.getElementById("pain").value,
     "fever":document.getElementById("fever").checked,
     "vomiting":document.getElementById("vomiting").checked,
     "blood_in_vomit":document.getElementById("blood_in_vomit").checked,
     "diarrhea":document.getElementById("diarrhea").checked,
     "blood_in_stool": document.getElementById("blood_in_stool").checked,
     "risk_factors": document.getElementById("risk_factors").checked,
   }}

  var i;
  for (i = 0; i < 3; i++){//remember to change the length number when data objects are added to the data
    if ((theNewData.symptoms.age) == (theData.abdomen[i].symptoms.age)&&
        (theNewData.symptoms.gender) == (theData.abdomen[i].symptoms.gender)&&
        (theNewData.symptoms.location) == (theData.abdomen[i].symptoms.location)&&
        (theNewData.symptoms.time) == (theData.abdomen[i].symptoms.time)&&
        (theNewData.symptoms.pain) == (theData.abdomen[i].symptoms.pain)&&
        (theNewData.symptoms.fever) == (theData.abdomen[i].symptoms.fever)&&
        (theNewData.symptoms.vomiting) == (theData.abdomen[i].symptoms.vomiting)&&
        (theNewData.symptoms.blood_in_vomit) == (theData.abdomen[i].symptoms.blood_in_vomit)&&
        (theNewData.symptoms.diarrhea) == (theData.abdomen[i].symptoms.diarrhea)&&
        (theNewData.symptoms.blood_in_stool) == (theData.abdomen[i].symptoms.blood_in_stool)&&
        (theNewData.symptoms.risk_factors) == (theData.abdomen[i].symptoms.risk_factors)
  ){
    // return {theData[i]};
    riskData = [theData.abdomen[i].actions.ER,theData.abdomen[i].actions.urgent_care,theData.abdomen[i].actions.primary_care,theData.abdomen[i].actions.nothing];
    // riskData.push(theData.abdomen[i].actions.risk);
    console.log("the risk while going to ER: " + theData.abdomen[i].actions.ER);
    console.log("the risk while going to Urgent Care: " + theData.abdomen[i].actions.urgent_care);
		console.log("the risk while going to primary doc: " + theData.abdomen[i].actions.primary_care);
		console.log("the risk of doing nothing: " + theData.abdomen[i].actions.nothing);

    }
   else {console.log("not the same");}
}

barVizFunction(riskData);
}

// const w = d3.select('.plot').node().clientWidth;
// const h = d3.select('.plot').node().clientHeight;
const w = 600;
const h = 600;
const barViz = d3.select('#svg').append('svg').attr('width',w).attr('height',h);

const barVizFunction = function(data){

          //UPDATE SELECTION
        	const nodes = barViz.selectAll('.node')
        		.data(data);
        	nodes.select('rect')
        		//.transition()
        		.style('fill','green'); //circles in the UPDATE selection are black; note the use of .transition

        	//ENTER SELECTION
        	const nodesEnter = nodes.enter()
        		.append('g').attr('class', 'node');
        	nodesEnter.append('rect')
        		// .style('fill', 'red'); //circles in the ENTER selection are colored differently
        	nodesEnter.append('text')
        		.attr('text-anchor', 'middle');

        	//UPDATE + ENTER
        	//Both of their 'transform' attributes are the set the same way
        	//so we merge them
        	nodes.merge(nodesEnter)
        		.transition()
        		// .attr('transform', d => `translate(${d.x}, ${d.y})`);
        	nodes.merge(nodesEnter)
        		.select('text')
        		.text(d => d);
        	nodes.merge(nodesEnter)
        		.select('rect')
        		.transition()
            .attr("x", 150)
            .attr("y", function (d,i) { return i * 20 -2; })
            .attr("width", function (d){return d * 7})
            .attr("height", 10)
            .attr("fill", 'red');

        	//EXIT SELECTION
        	//nodes.exit().remove();
        	nodes.exit()
        		.select('rect')
        		.style('fill','green');
}

export {
  SayThis,
  doIt,
  abdomenForm
}
