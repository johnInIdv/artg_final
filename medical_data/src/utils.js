import * as d3 from 'd3';

import {
	theData2,
} from './data2';

function parseInstanceData(d){
	return{
		abdomen: d.abdomen,
		knee: d.knee,
		head: d.head
	}
}

function FormDisplay(){

  let labels = [];
  let inputID = [];
  let optionElements = [];
  let theForm;

	function exports(){
    // grab the form div
        // var yt = document.getElementById('abdomenForm');

      theForm.innerHTML = '';//clears the form on each selection


        for (var i = 0; i < labels.length; i++){//runs through all the labels given to that problem
          var lo = document.createElement('div');
              lo.setAttribute('class','form-group');

        if (typeof(optionElements[i][0]) === 'string'){


    // create and add labels
            var w = document.createElement('label');
                w.setAttribute('for','inputVariables');
                w.setAttribute('class','labels')
            var l = document.createTextNode(labels[i]);
                w.appendChild(l);

    // create and add select element with attribute
            var mj = document.createElement('select');
                mj.setAttribute('id',inputID[i]);
                mj.setAttribute('class','inputs');
                mj.setAttribute('class','form-control');
    // run through the elements to place parameters as options
            for (var j = 0; j < optionElements[i].length; j++){
                var s = document.createElement('option');
                var t = document.createTextNode(optionElements[i][j]);
                    s.appendChild(t);
                    mj.appendChild(s);//append options to the select element

                    w.appendChild(mj);
                    lo.appendChild(w);
                    theForm.appendChild(lo);
                    //Log UI interactions

            }
          } else if (typeof(optionElements[i][0]) === 'boolean'){

            // for (var k = 0; k < checked.length; k++){//needs attention
               // create and add labels
               var nh = document.createElement('label');
               var th = document.createTextNode(labels[i]);
                   nh.setAttribute('for','inputVariables');
                   nh.appendChild(th);
               var nm = document.createElement('input');
                   nm.setAttribute('type','checkbox');
                   nm.setAttribute('id',inputID[i]);
                   nm.setAttribute('class','form-check');
                   nm.setAttribute('class','btn');
                   nh.appendChild(nm);
                   lo.appendChild(nh);
                   theForm.appendChild(lo);
            }
         }
	    }

    	//Getter/setter methods
    	exports.labels = function(_){
    		labels = _;
    		return this;
    	}

    	exports.inputID = function(_){
    		inputID = _;
    		return this;
    	}

      exports.optionElements = function(_){
        optionElements = _;
        return this;
      }

      exports.selectFormLocation = function(_){
        theForm = _;
        return this;
      }

    	return exports;

}


function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}


function addInput(item,index) {
  var newID = [item,"Input"].join("");
  return newID;
}

const getFormElements = function (data){
    		//abdomen data
    		const formElements = [];//an array of parameters arrays
    		const formKeys = [];//this is an array of labels
        var x;
    		for (x in data) {
    		  // document.getElementById("demo").innerHTML += x + "<br>";
    			formKeys.push(x);
    			formElements.push(data[x]);
    		}

    		const formIDs = formKeys.map(addInput);//produces new ID's

    		const form = FormDisplay()
    				.labels(formKeys)
    				.optionElements(formElements)
    				.inputID(formIDs)
    				.selectFormLocation(document.getElementById('theFormLocation'));

    		form();
    }



// 1. get new data from input values - function that dispatches the values
// 2. loop through instance's symptoms
// 3. grab the actions and recommendation from the instance whose symptoms match the input

const problemPicked = document.getElementById("problem").value;
const inputsArray = [];

const inputs = function(inputID) {
  if (getElementById(inputID).value){
    inputsArray.push(getElementById(inputID).value)
  } else if (getElementById(inputID).checked){
    inputsArray.push(getElementById(inputID).checked)
  }
  inputs(inputID)
console.log(inputsArray);
}

let riskData;
// function abdomenViz(){
//
//   const theNewData = {//dynamically produce this based on available data for chosen problem
//    "symptoms":{
//      "age": document.getElementById("ageInput").value,
//      "gender": document.getElementById("genderInput").value,
//      "location": document.getElementById("locationInput").value,
//      "time": document.getElementById("timeInput").value,
//      "pain": document.getElementById("painInput").value,
//      "fever": document.getElementById("feverInput").checked,
//      "vomiting": document.getElementById("vomitingInput").checked,
//      "blood_in_vomit": document.getElementById("blood_in_vomitInput").checked,
//      "diarrhea": document.getElementById("diarrheaInput").checked,
//      "blood_in_stool": document.getElementById("blood_in_stoolInput").checked,
//      "risk_factors": document.getElementById("risk_factorsInput").checked
//    }}
//
//   var i;
//   for (i = 0; i < 3; i++){//remember to change the length number when data objects are added to the data
//     if ((theNewData.symptoms.age) == (theData2.abdomen.instances.one.symptoms.age)&&
//         (theNewData.symptoms.gender) == (theData2.abdomen.instances.one.symptoms.gender)&&
//         (theNewData.symptoms.location) == (theData2.abdomen.instances.one.symptoms.location)&&
//         (theNewData.symptoms.time) == (theData2.abdomen.instances.one.symptoms.time)&&
//         (theNewData.symptoms.pain) == (theData2.abdomen.instances.one.symptoms.pain)&&
//         (theNewData.symptoms.fever) == (theData2.abdomen.instances.one.symptoms.fever)&&
//         (theNewData.symptoms.vomiting) == (theData2.abdomen.instances.one.symptoms.vomiting)&&
//         (theNewData.symptoms.blood_in_vomit) == (theData2.abdomen.instances.one.symptoms.blood_in_vomit)&&
//         (theNewData.symptoms.diarrhea) == (theData2.abdomen.instances.one.symptoms.diarrhea)&&
//         (theNewData.symptoms.blood_in_stool) == (theData2.abdomen.instances.one.symptoms.blood_in_stool)&&
//         (theNewData.symptoms.risk_factors) == (theData2.abdomen.instances.one.symptoms.risk_factors)
//   ){
//     return {theData2[i]};
//     riskData = [theData2.abdomen.instances.one.actions.ER,
//                 theData2.abdomen.instances.one.actions.urgent_care,
//                 theData2.abdomen.instances.one.actions.primary_care,
//                 theData2.abdomen.instances.one.actions.nothing];
//     // riskData.push(theData2.abdomen[i].actions.risk);
//
//     console.log("the risk while going to ER: " + theData2.abdomen.instances.one.actions.ER);
//     console.log("the risk while going to Urgent Care: " + theData2.abdomen.instances.one.actions.urgent_care);
// 		console.log("the risk while going to primary doc: " + theData2.abdomen.instances.one.actions.primary_care);
// 		console.log("the risk of doing nothing: " + theData2.abdomen.instances.one.actions.nothing);
//
//     }
//    else {
//      console.log("not the same");
//    }
// // }
//
// barVizFunction(riskData);
// }
//
// function kneeViz(){
//
//   const theNewData = {
//    "symptoms":{
//      "age": document.getElementById("ageInput").value,
//      "gender": document.getElementById("genderInput").value,
//      "location": document.getElementById("locationInput").value,
//      "time": document.getElementById("timeInput").value,
//      "pain": document.getElementById("painInput").value,
//      "fever": document.getElementById("feverInput").checked,
//      "vomiting": document.getElementById("vomitingInput").checked,
//      "blood_in_vomit": document.getElementById("blood_in_vomitInput").checked,
//      "risk_factors": document.getElementById("risk_factorsInput").checked
//    }}
//
//   var i;
//   for (i = 0; i < 3; i++){//remember to change the length number when data objects are added to the data
//     if ((theNewData.symptoms.age) == (theData2.[i].symptoms.age)&&
//         (theNewData.symptoms.gender) == (theData2.[i].symptoms.gender)&&
//         (theNewData.symptoms.location) == (theData2.[i].symptoms.location)&&
//         (theNewData.symptoms.time) == (theData2.[i].symptoms.time)&&
//         (theNewData.symptoms.pain) == (theData2.[i].symptoms.pain)&&
//         (theNewData.symptoms.fever) == (theData2.[i].symptoms.fever)&&
//         (theNewData.symptoms.vomiting) == (theData2.[i].symptoms.vomiting)&&
//         (theNewData.symptoms.blood_in_vomit) == (theData2.[i].symptoms.blood_in_vomit)&&
//         (theNewData.symptoms.risk_factors) == (theData2.[i].symptoms.risk_factors)
//   ){
//     // return {theData2[i]};
//     riskData = [theData2.[i].actions.ER,
//                 theData2.[i].actions.urgent_care,
//                 theData2.[i].actions.primary_care,
//                 theData2.[i].actions.nothing];
//     // riskData.push(theData2.abdomen[i].actions.risk);
//
//     console.log("the risk while going to ER: " + theData2.[i].actions.ER);
//     console.log("the risk while going to Urgent Care: " + theData2.[i].actions.urgent_care);
// 		console.log("the risk while going to primary doc: " + theData2.[i].actions.primary_care);
// 		console.log("the risk of doing nothing: " + theData2.[i].actions.nothing);
//
//     }
//    else {
//      console.log("not the same");
//    }
// }
//
// barVizFunction(riskData);
// }

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
  getFormElements,
  FormDisplay,
	parseInstanceData,
  GetResults
}
