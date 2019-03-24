import * as d3 from 'd3';

import {
	theData,
} from './data';



// labels = labels (all the variables for the chosen problem)
// inputID = id's for the chosen variable so that it's value can be matched against values in theData set.
// problemsElements = the variables for a particular problem's element
// const displayElements = function(labels, inputID, problemsElements,labelsChecked,inputIDchecked,checked){
//
// // grab the form div
//     var yt = document.getElementById('abdomenForm');
//     yt.innerHTML = '';
//
//     for (var i = 0; i < labels.length; i++){//runs through all the labels given to that problem
//
// // create and add labels
//         var nh = document.createElement('label');
//         var th = document.createTextNode(labels[i]);
//             nh.appendChild(th);
//             yt.appendChild(nh);
//
// // create and add select element with attribute
//         var mj = document.createElement('select');
//             mj.setAttribute('id',inputID[i]);
//             mj.setAttribute('class','inputs');
//
// // run through the elements to place parameters as options
//         for (var j = 0; j < problemsElements[i].length; j++){
//             var s = document.createElement('option');
//             var t = document.createTextNode(problemsElements[i][j]);
//                 s.appendChild(t);
//                 mj.appendChild(s);//append options to the select element
//         }
//
//         yt.appendChild(mj);//after options are appended to the select, append to the form
//         }
//
//         for (var k = 0; k < checked.length; k++){
//            // create and add labels
//            var nh = document.createElement('label');
//            var th = document.createTextNode(labelsChecked[k]);
//                nh.appendChild(th);
//            var nm = document.createElement('input');
//                nm.setAttribute('type','checkbox');
//                nm.setAttribute('id',inputIDchecked[k]);
//                nh.appendChild(nm);
//
//                yt.appendChild(nh);
//        }
//     }



// const checkMarks = (labelsChecked,inputIDchecked,checked) => {
//      for (var k = 0; k < checked.length; k++){
//         // create and add labels
//         var nh = document.createElement('label');
//         var th = document.createTextNode(labelsChecked[k]);
//             nh.appendChild(th);
//
//         var nm = document.createElement('input');
//             nm.setAttribute('id',inputIDchecked[k]);
//             nm.setAttribute('type','checkbox');
//
//             nh.appendChild(nm);
//
//             yt.appendChild(nh);
//     }
// }



// function FormDisplay(){
//
//   function display (container){
//
//     let labels = [1,2,3,4];
//
//   // grab the form div
//       // var yt = document.getElementById('abdomenForm');
//       container.innerHTML = '';
//       for (var i = 0; i < labels.length; i++){//runs through all the labels given to that problem
//
//
//       if (optionElements[i][0] == string){
//       // create and add labels
//               var w = document.createElement('label');
//               var l = document.createTextNode(labels[i]);
//                   w.appendChild(l);
//
//   // create and add select element with attribute
//           var mj = document.createElement('select');
//               mj.setAttribute('id',inputID[i]);
//               mj.setAttribute('class','inputs');
//   // run through the elements to place parameters as options
//           for (var j = 0; j < optionElements[i].length; j++){
//               var s = document.createElement('option');
//               var t = document.createTextNode(optionElements[i][j]);
//                   s.appendChild(t);
//                   mj.appendChild(s);//append options to the select element
//                   w.appendChild(mj)
//           }
//         } else if (optionElements[i][0] == boolean){
//
//           // for (var k = 0; k < checked.length; k++){//needs attention
//              // create and add labels
//              var nh = document.createElement('label');
//              var th = document.createTextNode(labels[i]);
//                  nh.appendChild(th);
//              var nm = document.createElement('input');
//                  nm.setAttribute('type','checkbox');
//                  nm.setAttribute('id',inputID[i]);
//                  nh.appendChild(nm);
//                  container.appendChild(nh)
//         }
//                 container.appendChild(w);
//           // yt.appendChild(mj);//after options are appended to the select, append to the form
//         }
//
//       }
//
//     // (labels, inputID, problemsElements,labelsChecked,inputIDchecked,checked){
//     //Getter/setter methods
//   	display.labels = function(_){
//   		labels = _;
//   		return this;
//   	}
//
//     display.inputID = function(_){
//   		inputID = _;
//   		return this;
//   	}
//
//     display.optionElements = function(_){
//   		optionElements = _;
//   		return this;
//   	}
//
//     return display;
//
// }
// send the array of labels and inputsID's to the globalDispatch



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


        if (typeof(optionElements[i][0]) === 'string'){
        // create and add labels
                var w = document.createElement('label');
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
                    theForm.appendChild(w);
            }
          } else if (typeof(optionElements[i][0]) === 'boolean'){

            // for (var k = 0; k < checked.length; k++){//needs attention
               // create and add labels
               var nh = document.createElement('label');
               var th = document.createTextNode(labels[i]);
                   nh.appendChild(th);
               var nm = document.createElement('input');
                   nm.setAttribute('type','checkbox');
                   nm.setAttribute('id',inputID[i]);
                   nm.setAttribute('class','form-check');
                   nh.appendChild(nm);
                   theForm.appendChild(nh)
          }

            // yt.appendChild(mj);//after options are appended to the select, append to the form
          }

	}

	//Getter/setter methods
	exports.labels = function(_){
		labels = _;
    console.log(labels);
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
//     if ((theNewData.symptoms.age) == (theData.[i].symptoms.age)&&
//         (theNewData.symptoms.gender) == (theData.[i].symptoms.gender)&&
//         (theNewData.symptoms.location) == (theData.[i].symptoms.location)&&
//         (theNewData.symptoms.time) == (theData.[i].symptoms.time)&&
//         (theNewData.symptoms.pain) == (theData.[i].symptoms.pain)&&
//         (theNewData.symptoms.fever) == (theData.[i].symptoms.fever)&&
//         (theNewData.symptoms.vomiting) == (theData.[i].symptoms.vomiting)&&
//         (theNewData.symptoms.blood_in_vomit) == (theData.[i].symptoms.blood_in_vomit)&&
//         (theNewData.symptoms.risk_factors) == (theData.[i].symptoms.risk_factors)
//   ){
//     // return {theData[i]};
//     riskData = [theData.[i].actions.ER,
//                 theData.[i].actions.urgent_care,
//                 theData.[i].actions.primary_care,
//                 theData.[i].actions.nothing];
//     // riskData.push(theData.abdomen[i].actions.risk);
//
//     console.log("the risk while going to ER: " + theData.[i].actions.ER);
//     console.log("the risk while going to Urgent Care: " + theData.[i].actions.urgent_care);
// 		console.log("the risk while going to primary doc: " + theData.[i].actions.primary_care);
// 		console.log("the risk of doing nothing: " + theData.[i].actions.nothing);
//
//     }
//    else {
//      console.log("not the same");
//    }
// }
//
// barVizFunction(riskData);
// }
//
// // const w = d3.select('.plot').node().clientWidth;
// // const h = d3.select('.plot').node().clientHeight;
// const w = 600;
// const h = 600;
// const barViz = d3.select('#svg').append('svg').attr('width',w).attr('height',h);
//
// const barVizFunction = function(data){
//
//           //UPDATE SELECTION
//         	const nodes = barViz.selectAll('.node')
//         		.data(data);
//         	nodes.select('rect')
//         		//.transition()
//         		.style('fill','green'); //circles in the UPDATE selection are black; note the use of .transition
//
//         	//ENTER SELECTION
//         	const nodesEnter = nodes.enter()
//         		.append('g').attr('class', 'node');
//         	nodesEnter.append('rect')
//         		// .style('fill', 'red'); //circles in the ENTER selection are colored differently
//         	nodesEnter.append('text')
//         		.attr('text-anchor', 'middle');
//
//         	//UPDATE + ENTER
//         	//Both of their 'transform' attributes are the set the same way
//         	//so we merge them
//         	nodes.merge(nodesEnter)
//         		.transition()
//         		// .attr('transform', d => `translate(${d.x}, ${d.y})`);
//         	nodes.merge(nodesEnter)
//         		.select('text')
//         		.text(d => d);
//         	nodes.merge(nodesEnter)
//         		.select('rect')
//         		.transition()
//             .attr("x", 150)
//             .attr("y", function (d,i) { return i * 20 -2; })
//             .attr("width", function (d){return d * 7})
//             .attr("height", 10)
//             .attr("fill", 'red');
//
//         	//EXIT SELECTION
//         	//nodes.exit().remove();
//         	nodes.exit()
//         		.select('rect')
//         		.style('fill','green');
// }

export {
  // abdomenViz,
  // kneeViz,
  // abdomenForm,
  // abdomenElements,
  // kneeElements,
  // makeElements,
  // displayElements,
  // checkMarks,
  FormDisplay
}
