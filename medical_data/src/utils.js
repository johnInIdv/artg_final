import * as d3 from 'd3';

import {
	theData,
} from './data';

const abdomenElements = {
  "age": ['18 – 45','46 – 64','65 and over'],
  "gender": ['male','female'],
  "time": ['1-3 days','4-7 days','a week or more'],
  "location": ["Right Lower Quadrant","Right Upper Quadrant","Left Lower Quadrant","Left Upper Quadrant"],
  "pain": ["1-3","4-7","8-10"]
  // "fever": [true,false]
}

// const symptomsArray = [];
// const symptoms = function () {
//   for (var i = 0; i < theData.abdomen[0].length; i++){
//     //runs through the theData object and make a new object with same keys and array of unique values that match that keys
//
//   }
// }

const kneeElements = {
  "age": ['18 – 24','25 – 64','65 and over'],
  "gender": ['male','female'],
  "time": ['1-3 days','4-7 days','a week or more']
}

// labels = labels (all the variables for the chosen problem)
// inputID = id's for the chosen variable so that it's value can be matched against values in theData set.
// problemsElements = the variables for a particular problem's element
const displayElements = function(labels, inputID, problemsElements){
    // var hub = document.getElementById("ageForm");
    //   hub.style.display = "block";
// grab the form div
    var yt = document.getElementById('ageForm');
    yt.innerHTML = '';
for (var i = 0; i < labels.length; i++){//runs through all the labels given to that problem

// create and add labels
    var nh = document.createElement('label');
    var th = document.createTextNode(labels[i]);
        nh.appendChild(th);
        yt.appendChild(nh);

// create and add select element with attribute
    var mj = document.createElement('select');
        mj.setAttribute('id',inputID[i]);
        mj.setAttribute('class','inputs');

// run through the elements to place parameters as options
for (var j = 0; j < problemsElements[i].length; j++){
    var s = document.createElement('option');
    var t = document.createTextNode(problemsElements[i][j]);
        s.appendChild(t);
        mj.appendChild(s);//append options to the select element
}

yt.appendChild(mj);//after options are appended to the select, append to the form
}

}



const makeElements = function(a,b){
  var yt = document.getElementById('ageForm');
    // yt.innerHTML = '';//clear out the previous selection
  for (var i = 0; i < a.length; i++){
    var tt = document.getElementById(b[i]);
    var s = document.createElement('option');
    var t = document.createTextNode(a[i]);
    s.appendChild(t);
    s.setAttribute("value",a[i]);
    tt.appendChild(s);
  }
}


function SayThis(){
  console.log("say this");
}

let riskData;
function doIt(){

  const theNewData = {
   "symptoms":{
     "age": document.getElementById("ageInput").value,
     "gender": document.getElementById("genderInput").value,
     "location": document.getElementById("locationInput").value,
     "time": document.getElementById("timeInput").value,
     "pain": document.getElementById("painInput").value,
     "fever": document.getElementById("fever").checked,
     "vomiting": document.getElementById("vomiting").checked,
     "blood_in_vomit": document.getElementById("blood_in_vomit").checked,
     "diarrhea": document.getElementById("diarrhea").checked,
     "blood_in_stool": document.getElementById("blood_in_stool").checked,
     "risk_factors": document.getElementById("risk_factors").checked
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
    riskData = [theData.abdomen[i].actions.ER,
                theData.abdomen[i].actions.urgent_care,
                theData.abdomen[i].actions.primary_care,
                theData.abdomen[i].actions.nothing];
    // riskData.push(theData.abdomen[i].actions.risk);

    console.log("the risk while going to ER: " + theData.abdomen[i].actions.ER);
    console.log("the risk while going to Urgent Care: " + theData.abdomen[i].actions.urgent_care);
		console.log("the risk while going to primary doc: " + theData.abdomen[i].actions.primary_care);
		console.log("the risk of doing nothing: " + theData.abdomen[i].actions.nothing);

    }
   else {
     console.log(theData.abdomen[i].actions.ER);
     console.log(theData.abdomen[2].symptoms.fever);
     console.log(theNewData.symptoms.vomiting);
     console.log(theData.abdomen[2].symptoms.vomiting);
     console.log("not the same");
   }
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
  abdomenForm,
  abdomenElements,
  kneeElements,
  makeElements,
  displayElements
}
