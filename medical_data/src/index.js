import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	// abdomenViz,
	// abdomenForm,
	// kneeViz,
	// abdomenElements,
	// kneeElements,
	// makeElements,
	// displayElements,
	// checkMarks,
	FormDisplay,
	GetResults,
	globalDispatch
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

var myObj, x;
const newArray = [];
const secondArray = [];
for (x in theData2.abdomen.parameters) {
  // document.getElementById("demo").innerHTML += x + "<br>";
	newArray.push(x);
	secondArray.push(theData2.abdomen.instances.one.symptoms[x]);
}
console.log(newArray);
console.log(secondArray);
// console.log(theData2);
// for (var i = 0; i < 10; i++){
// 	// for (var j = 0; j < 4; j++){
// 		console.log(theData2.problem.abdomen.parameters[i])
// 	// }
// }
//
//

//
// const home = [["age","18 – 45"],
// 	["gender","male"],
// 	["location",["Right Lower Quadrant","sfasd","ssgsgsgsg"]],
// 	["time","1-3 days"],
// 	["pain","1-3"],
// 	["fever",false],
// 	["vomiting",false],
// 	["blood_in_vomit",false],
// 	["diarrhea",false],
// 	["blood_in_stool",false],
// 	["risk_factors",false]]
//
// const abdomenElements = [//I should make a function to populate this based on the theData set
//   ["age",['18 – 45','46 – 64','65 and over']],
//   ["gender",['male','female']],
//   ["time",['1-3 days','4-7 days','a week or more']],
//   ["location",["Right Lower Quadrant","Right Upper Quadrant","Left Lower Quadrant","Left Upper Quadrant"]],
//   ["pain",["1-3","4-7","8-10"]],
// 	["fever",[true,false]],
// 	["vomiting",[true,false]],
// 	["blood_in_vomit",[true,false]],
// 	["diarrhea",[true,false]],
// 	["blood_in_stool",[true,false]],
// 	["risk_factors",[true,false]]
// ]
// console.log(theData2.problem[1]);
// console.log(abdomenElements);
// const home = theData2.problem.abdomen.parameters;
function addInput(item,index) {
  var newID = [item,"Input"].join("");
  return newID;
}

//abdomen data
const abElements = [];//an array of parameters arrays
const abKeys = [];//this is an array of labels
for (x in theData2.abdomen.parameters) {
  // document.getElementById("demo").innerHTML += x + "<br>";
	abKeys.push(x);
	abElements.push(theData2.abdomen.parameters[x]);
}

console.log(abElements);
const abIDs = abKeys.map(addInput);//produces new ID's

const abForm = FormDisplay()
		.labels(abKeys)
		.optionElements(abElements)
		.inputID(abIDs)
		.selectFormLocation(document.getElementById('theFormLocation'))


//knee data
const kneeElements = [];//an array of parameters arrays
const kneeKeys = [];//this is an array of labels
for (x in theData2.knee.parameters) {
  // document.getElementById("demo").innerHTML += x + "<br>";
	kneeKeys.push(x);
	kneeElements.push(theData2.knee.parameters[x]);
}
const kneeIDs = kneeKeys.map(addInput);//produces new ID's

const kneeForm = FormDisplay()
		.labels(kneeKeys)
		.optionElements(abElements)
		.inputID(kneeIDs)
		.selectFormLocation(document.getElementById('theFormLocation'));

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

const p = document.getElementById('problem');


p.addEventListener('change',(e) => {
	if (e.target.name == 'pOption'){
		if (e.target.value == 'abdomen'){
			abForm();
			// globalDispatch.on('make:bars',() => {
			// 	abdomenViz();
			// })
		} else if (e.target.value == 'knee') {
			kneeForm();
			// globalDispatch.on('make:bars',() => {
			// 	kneeViz();
			// })
			}
		}
})

	// init controller
	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.to("#animate", 3, {opacity:1,scale:1});
	var tween2 = TweenMax.to("#animate2",3, {opacity:1,scale:1});
	const H = window.innerHeight;

	// build scene and set duration to window height
  var scene1 = new ScrollMagic.Scene({triggerElement: "#firstTrigger",duration:200,offset: 400})
          .setTween(tween1)
          // .on('enter',() => {
					// 	globalDispatch.call('make:bars',null);
          // })
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
