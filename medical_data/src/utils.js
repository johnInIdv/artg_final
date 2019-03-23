import * as d3 from 'd3';

import {
	theData,
} from './data';



// labels = labels (all the variables for the chosen problem)
// inputID = id's for the chosen variable so that it's value can be matched against values in theData set.
// problemsElements = the variables for a particular problem's element
const displayElements = function(labels, inputID, problemsElements,labelsChecked,inputIDchecked,checked){

// grab the form div
    var yt = document.getElementById('abdomenForm');
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

        for (var k = 0; k < checked.length; k++){
           // create and add labels
           var nh = document.createElement('label');
           var th = document.createTextNode(labelsChecked[k]);
               nh.appendChild(th);
           var nm = document.createElement('input');
               nm.setAttribute('type','checkbox');
               nm.setAttribute('id',inputIDchecked[k]);
               nh.appendChild(nm);

               yt.appendChild(nh);
       }
    }



const checkMarks = (labelsChecked,inputIDchecked,checked) => {
     for (var k = 0; k < checked.length; k++){
        // create and add labels
        var nh = document.createElement('label');
        var th = document.createTextNode(labelsChecked[k]);
            nh.appendChild(th);

        var nm = document.createElement('input');
            nm.setAttribute('id',inputIDchecked[k]);
            nm.setAttribute('type','checkbox');

            nh.appendChild(nm);

            yt.appendChild(nh);
    }
}

let riskData;
function abdomenViz(){

  const theNewData = {
   "symptoms":{
     "age": document.getElementById("ageInput").value,
     "gender": document.getElementById("genderInput").value,
     "location": document.getElementById("locationInput").value,
     "time": document.getElementById("timeInput").value,
     "pain": document.getElementById("painInput").value,
     "fever": document.getElementById("feverInput").checked,
     "vomiting": document.getElementById("vomitingInput").checked,
     "blood_in_vomit": document.getElementById("blood_in_vomitInput").checked,
     "diarrhea": document.getElementById("diarrheaInput").checked,
     "blood_in_stool": document.getElementById("blood_in_stoolInput").checked,
     "risk_factors": document.getElementById("risk_factorsInput").checked
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
     console.log("not the same");
   }
}

barVizFunction(riskData);
}

function kneeViz(){

  const theNewData = {
   "symptoms":{
     "age": document.getElementById("ageInput").value,
     "gender": document.getElementById("genderInput").value,
     "location": document.getElementById("locationInput").value,
     "time": document.getElementById("timeInput").value,
     "pain": document.getElementById("painInput").value,
     "fever": document.getElementById("feverInput").checked,
     "vomiting": document.getElementById("vomitingInput").checked,
     "blood_in_vomit": document.getElementById("blood_in_vomitInput").checked,
     "risk_factors": document.getElementById("risk_factorsInput").checked
   }}

  var i;
  for (i = 0; i < 3; i++){//remember to change the length number when data objects are added to the data
    if ((theNewData.symptoms.age) == (theData.knee[i].symptoms.age)&&
        (theNewData.symptoms.gender) == (theData.knee[i].symptoms.gender)&&
        (theNewData.symptoms.location) == (theData.knee[i].symptoms.location)&&
        (theNewData.symptoms.time) == (theData.knee[i].symptoms.time)&&
        (theNewData.symptoms.pain) == (theData.knee[i].symptoms.pain)&&
        (theNewData.symptoms.fever) == (theData.knee[i].symptoms.fever)&&
        (theNewData.symptoms.vomiting) == (theData.knee[i].symptoms.vomiting)&&
        (theNewData.symptoms.blood_in_vomit) == (theData.knee[i].symptoms.blood_in_vomit)&&
        (theNewData.symptoms.risk_factors) == (theData.knee[i].symptoms.risk_factors)
  ){
    // return {theData[i]};
    riskData = [theData.knee[i].actions.ER,
                theData.knee[i].actions.urgent_care,
                theData.knee[i].actions.primary_care,
                theData.knee[i].actions.nothing];
    // riskData.push(theData.abdomen[i].actions.risk);

    console.log("the risk while going to ER: " + theData.knee[i].actions.ER);
    console.log("the risk while going to Urgent Care: " + theData.knee[i].actions.urgent_care);
		console.log("the risk while going to primary doc: " + theData.knee[i].actions.primary_care);
		console.log("the risk of doing nothing: " + theData.knee[i].actions.nothing);

    }
   else {
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
  abdomenViz,
  kneeViz,
  abdomenForm,
  abdomenElements,
  kneeElements,
  makeElements,
  displayElements,
  checkMarks
}
