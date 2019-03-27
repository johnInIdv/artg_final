import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	abdomenViz,
	// abdomenForm,
	// kneeViz,
	// abdomenElements,
	// kneeElements,
	// makeElements,
	// displayElements,
	// checkMarks,
	FormDisplay,
	GetResults
} from './utils';

import {
	theData,
} from './data';

import {
	theData2,
} from './data2';

//
// const myObj33 = {
//   "name":"John",
//   "age":30,
//   "cars": {
//     "car100":{
// 	    "car10":"Ford10",
// 	    "car20":"BMW20",
// 	    "car30":"Fiat30"
// 	  },
//     "car2":"BMW",
//     "car3":"Fiat"
//   }
//  }
// console.log(JSON.stringify(myObj33.cars));
// var myObj34, x;
// myObj34 = JSON.stringify(myObj33.cars);

const theData3 =
  {  "abdomen": {
      "parameters":{"age":['18 – 45','46 – 64','65 and over']},
      "instances": {
        "ab1":{
         "symptoms": {
					"age":"18 – 45",
		 			"gender":"male",
		 			"location":"Right Lower Quadrant",
		 			"time":"1-3 days",
		 			"pain":"1-3",
		 			"fever":false,
		 			"vomiting":false,
		 			"blood_in_vomit":false,
		 			"diarrhea":false,
		 			"blood_in_stool":false,
		 			"risk_factors":false},
         "actions": {
           "ER": 8},
         "recommendation":"ER"
        },
        "ab2":{
         "symptoms": {
           "age":"18 – 455555"},
         "actions": {
           "ER": 8},
         "recommendation":"ER"
        },
        "ab3":{
         "symptoms": {
           "age":"18 – 45666"},
         "actions": {
           "ER": 8},
         "recommendation":"ER"
        }
      }
  }
}

const good = 'abdomen';
console.log(theData2[good]);
var myObj, x;
// const problemsArray = [];
// const secondArray = [];
// for (x in theData2) {
//   // document.getElementById("demo").innerHTML += x + "<br>";
// 	problemsArray.push(x);
// 	secondArray.push(theData2[abdomen][x]);
// }
// console.log(problemsArray);
// console.log(secondArray);

for (x in theData2.abdomen.instances){
	console.log(x);
}
// const thisArray = [];
// for (var i = 0; i < 3; i++){
// 	// console.log(theData3.abdomen.instances[newArray[i]].symptoms);
// 	for (x in theData2.abdomen.instances[newArray[i]].symptoms){
// 		if (theData2.abdomen.instances[newArray[i]].symptoms[x] == theData2.abdomen.instances.ab1.symptoms[x]){//change this it input data){
// 			console.log(theData2.abdomen.instances[newArray[i]].symptoms[x]);//return the actions and recommendations
// 		}
// 		thisArray.push(theData2.abdomen.instances[newArray[i]].symptoms[x]);
// 	}
// }		console.log(thisArray);
// const off = secondArray.map(ins => ins.symptoms);//gives an array of objects of symptons
// console.log(off[0]);

// const dataArray = [];
// function makeData(make){
//
// 		dataArray.push(theData2[make]);
//
// 	}
// makeData('knee')
// console.log(dataArray);

// const probMap = theData2.map(ing => ing.theData2)



const globalDispatch = d3.dispatch('make:bars','ui-event','store:labels','update:first');

globalDispatch.on('make:bars', () => {
	abdomenViz();
});



/* Record interaction with UI elements */

//Log UI interactions
globalDispatch.on('ui-event', () => {
	const problemPicked = document.getElementById("problem").value;
	// console.log(problemPicked);
	const dataArray = [];
	function makeData(make){
			dataArray.push(theData2[make]);
		}
	makeData(problemPicked);
	getFormElements(dataArray[0].parameters);
		// abForm();
	console.log(dataArray);
	});

//Button interactions
d3.selectAll('#problem').on('change', function(){
	globalDispatch.call(
		'ui-event',
		null,
	);
});

function addInput(item,index) {
  var newID = [item,"Input"].join("");
  return newID;
}

const getFormElements = function(data){
		//abdomen data
		const formElements = [];//an array of parameters arrays
		const formKeys = [];//this is an array of labels
		for (x in data) {
		  // document.getElementById("demo").innerHTML += x + "<br>";
			formKeys.push(x);
			formElements.push(data[x]);
		}

		console.log(formElements);
		const formIDs = formKeys.map(addInput);//produces new ID's

		const form = FormDisplay()
				.labels(formKeys)
				.optionElements(formElements)
				.inputID(formIDs)
				.selectFormLocation(document.getElementById('theFormLocation'));

		form();
}




//
//
//
// //knee data
// const kneeElements = [];//an array of parameters arrays
// const kneeKeys = [];//this is an array of labels
// for (x in theData2.knee.parameters) {
//   // document.getElementById("demo").innerHTML += x + "<br>";
// 	kneeKeys.push(x);
// 	kneeElements.push(theData2.knee.parameters[x]);
// }
// const kneeIDs = kneeKeys.map(addInput);//produces new ID's
//
// const kneeForm = FormDisplay()
// 		.labels(kneeKeys)
// 		.optionElements(abElements)
// 		.inputID(kneeIDs)
// 		.selectFormLocation(document.getElementById('theFormLocation'));

// const results = GetResults()
// 		.labels(kneeKeys)
// 		.inputID(kneeIDs)
// 		.
// const kneeSymMap = new Map(theData2.problem[1].instances[0][0]);
// const kneeSymElements = [];//an array of parameters arrays
// const kneeSymKeys = [];//this is an array of labels
// kneeSymMap.forEach(function(value, key) {
// 	kneeSymElements.push(value);
// 	kneeSymKeys.push(key);
// });
// console.log(theData2.problem[1].knee.instances);
// console.log(kneeSymKeys);
// console.log(kneeSymElements);
// Call the module to create the slider

// const away = [{"age":"18 – 45"},
// 	{"gender":"male"},
// 	{"location":"Right Lower Quadrant"},
// 	{"time":"1-3 days"},
// 	{"pain":"1-3"},
// 	{"fever":false},
// 	{"vomiting":false},
// 	{"blood_in_vomit":false},
// 	{"diarrhea":false},
// 	{"blood_in_stool": false},
// 	{"risk_factors": false}]
//
// console.log(home[0].age == away[0].age);
// console.log(away);


// const kneeElements = {
//   "age": ['18 – 24','25 – 64','65 and over'],
//   "gender": ['male','female'],
//   "time": ['1-3 days','4-7 days','a week or more'],
// 	"location": ["Right side","Kneecap","Left side"],
// 	"pain": ["1-3","4-7","8-10"],
// 	"fever": [true,false],
// 	"vomiting": [true,false],
// 	"blood_in_vomit": [true,false],
// 	"risk_factors": [true,false]
// }
// const labels = ['age','gender','time',"location","pain"];
// const labelsCheck = ['fever','vomiting','blood in vomit','diarrhea','blood in stools','risk factors'];
// const inputs = ['ageInput','genderInput','timeInput','locationInput','painInput'];
// const inputsCheck = ['feverInput','vomitingInput','blood_in_vomitInput','diarrheaInput','blood_in_stoolInput','risk_factorsInput']
// const inputsCheckKnee = ['feverInput','vomitingInput','blood_in_vomitInput','risk_factorsInput']
// const abdomenVariables = [abdomenElements.age,kneeElements.gender,abdomenElements.time,abdomenElements.location,
// 													abdomenElements.pain];
// const kneeVariables = [kneeElements.age,kneeElements.gender,kneeElements.time,kneeElements.location,kneeElements.pain];
// const abdomenVariablesChecked = [abdomenElements.fever,abdomenElements.vomiting,abdomenElements.blood_in_vomit,
// 																	abdomenElements.diarrhea,abdomenElements.blood_in_stool,abdomenElements.risk_factors];
// const kneeVariablesChecked = [kneeElements.fever,kneeElements.vomiting,kneeElements.blood_in_vomit,kneeElements.risk_factors];

// const p = document.getElementById('problem');
//
//
// p.addEventListener('change',(e) => {
// 	if (e.target.name == 'pOption'){
// 		if (e.target.value == 'abdomen'){
// 			abForm();
// 			// globalDispatch.on('make:bars',() => {
// 			// 	abdomenViz();
// 			// })
// 		} else if (e.target.value == 'knee') {
// 			kneeForm();
// 			// globalDispatch.on('make:bars',() => {
// 			// 	kneeViz();
// 			// })
// 			}
// 		}
// })

	// init controller
	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.to("#animate", 3, {opacity:1,scale:1});
	var tween2 = TweenMax.to("#animate2",3, {opacity:1,scale:1});
	const H = window.innerHeight;

	// build scene and set duration to window height
  var scene1 = new ScrollMagic.Scene({triggerElement: "#firstTrigger",duration:200,offset: 400})
          .setTween(tween1)
          .on('enter',() => {
						globalDispatch.call('make:bars',null);
          })
          .addIndicators({name:"trigger #1"}) // add indicators (requires plugin)
          .addTo(controller);

	var body = new ScrollMagic.Scene({triggerElement: "#bodyTrigger",duration:800,offset: 100})
	        .setPin('#body')
	        .addIndicators({name:"body pin"}) // add indicators (requires plugin)
	        .addTo(controller);
	// var scene2 = new ScrollMagic.Scene({triggerElement: "#secondModule",duration:200})
  //         .setTween(tween2)
	// 				.on('enter',() => {
	// 				 console.log("just entered second module");
  //         })
  //         .addIndicators({name:"trigger #2"}) // add indicators (requires plugin)
  //         .addTo(controller);
	//
	// var scene3 = new ScrollMagic.Scene({triggerElement:"#thirdModule",duration:200})
  //         .setClassToggle('#animate3','red')
  //         .on('enter',() => {UpdateThirdModule()})
  //         .addIndicators({name:"trigger #3"})
  //         .addTo(controller);
