import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	SayThis,
	doIt,
	abdomenForm,
	// abdomenElements,
	// kneeElements,
	makeElements,
	displayElements,
	checkMarks
} from './utils';

import {
	theData,
} from './data';


const abdomenElements = {//I should make a function to populate this based on the theData set
  "age": ['18 – 45','46 – 64','65 and over'],
  "gender": ['male','female'],
  "time": ['1-3 days','4-7 days','a week or more'],
  "location": ["Right Lower Quadrant","Right Upper Quadrant","Left Lower Quadrant","Left Upper Quadrant"],
  "pain": ["1-3","4-7","8-10"],
	"fever": [true,false],
	"vomiting": [true,false],
	"blood_in_vomit": [true,false],
	"diarrhea": [true,false],
	"blood_in_stool": [true,false],
	"risk_factors": [true,false]
}
const kneeElements = {
  "age": ['18 – 24','25 – 64','65 and over'],
  "gender": ['male','female'],
  "time": ['1-3 days','4-7 days','a week or more'],
	"location": ["Right side","Kneecap","Left side"],
	"pain": ["1-3","4-7","8-10"],
	"fever": [true,false],
	"vomiting": [true,false],
	"blood_in_vomit": [true,false],
	"diarrhea": [true,false],
	"blood_in_stool": [true,false],
	"risk_factors": [true,false]
}
const labels = ['age','gender','time',"location","pain"];
const labelsCheck = ['fever','vomiting','blood in vomit','diarrhea','blood in stools','risk factors'];
const inputs = ['ageInput','genderInput','timeInput','locationInput','painInput'];
const inputsCheck = ['feverInput','vomitingInput','blood_in_vomitInput','diarrheaInput','blood_in_stoolInput','risk_factorsInput']
const abdomenVariables = [abdomenElements.age,abdomenElements.gender,abdomenElements.time,abdomenElements.location,
													abdomenElements.pain,abdomenElements.fever];
const kneeVariables = [kneeElements.age,kneeElements.gender,kneeElements.time,kneeElements.location,kneeElements.pain,
												kneeElements.fever];
const abdomenVariablesChecked = [abdomenElements.fever,abdomenElements.vomiting,abdomenElements.blood_in_vomit,
																	abdomenElements.diarrhea,abdomenElements.blood_in_stool,abdomenElements.risk_factors];
const kneeVariablesChecked = [kneeElements.fever,kneeElements.vomiting,kneeElements.blood_in_vomit,
															kneeElements.diarrhea,kneeElements.blood_in_stool,kneeElements.risk_factors];

const p = document.getElementById('problem');
// const af = document.getElementById('abdomenForm');
// const kf = document.getElementById('kneeForm');
p.addEventListener('change',(e) => {

	console.log(e.target.name);
	console.log(e.target.value);
	if (e.target.name == 'pOption'){
		if (e.target.value == 'abdomen'){
			displayElements(labels,inputs,abdomenVariables,labelsCheck,inputsCheck,abdomenVariablesChecked);

		} else if (e.target.value == 'knee') {
			displayElements(labels,inputs,kneeVariables,labelsCheck,inputsCheck,kneeVariablesChecked);
			}
		}
})

const globalDispatch = d3.dispatch('make:bars','change:pain','update:first');

globalDispatch.on('make:bars',() => {
	doIt();

})

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
