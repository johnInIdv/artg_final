import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	SayThis,
	doIt,
	abdomenForm,
	abdomenElements,
	kneeElements,
	makeElements
} from './utils';

import {
	theData,
} from './data';

//View modules
// import {UpdateFirstModuleOutputs,
// 				UpdateFirstModuleViz,
// 				GetRecRisk} from './viewModules/firstModule';
// import UpdateSecondModule from './viewModules/secondModule';
// import UpdateThirdModule from './viewModules/thirdModule';
// import SetClassFunction from './viewModules/SetClassFunction';

console.log("doit is actually here");
console.log(typeof(theData.abdomen[0].symptoms.fever));
console.log(kneeElements.age);
makeElements(abdomenElements.age,ageInput);
makeElements(abdomenElements.gender,genderInput);
makeElements(abdomenElements.time,timeInput);
makeElements(abdomenElements.location,locationInput);
makeElements(abdomenElements.pain,painInput);
var good = document.getElementById("fever").checked;
console.log(typeof(good));


const p = document.getElementById('problem');
const af = document.getElementById('abdomenForm');
const kf = document.getElementById('kneeForm');
p.addEventListener('change',(e) => {
	console.log(e.target.name);
	console.log(e.target.value);
	if (e.target.name == 'pOption'){
		if (e.target.value == 'abdomen'){
			makeElements(abdomenElements.age,ageInput);
			makeElements(abdomenElements.gender,genderInput);
			makeElements(abdomenElements.time,timeInput);
			makeElements(abdomenElements.location,locationInput);
			makeElements(abdomenElements.pain,painInput);
			// makeElements(abdomenElements.fever,feverInput);
		} else if (e.target.value == 'knee') {
			makeElements(kneeElements.age,ageInput);
			makeElements(kneeElements.gender,genderInput);
			makeElements(kneeElements.time,timeInput);
			}
		}
})


// p.addEventListener('change',(e) => {
// 	console.log(e.target.name);
// 	console.log(e.target.value);
// 	if (e.target.name == 'pOption'){
// 		if (e.target.value == 'abdomen'){
// 			af.style.display = 'block';
// 			kf.style.display = 'none';
// 		} else if (e.target.value == 'knee') {
// 				af.style.display = "none";
// 				kf.style.display = "block";
// 			}
// 		}
// })


const globalDispatch = d3.dispatch('make:bars','change:pain','update:first');

globalDispatch.on('make:bars',() => {
	doIt();
	// abdomenForm();
})

// globalDispatch.on('update:first',() => {
// 	UpdateFirstModuleOutputs();
//
//
// 	// console.log(GetRecRisk(d).result.risk);
// });
// // const sayThis = () => { return `I am risk: ${GetRecRisk(d).result.risk}` }
// //
// // document.getElementById("div3").innerHTML = sayThis();
//
//
//
//
//
//     globalDispatch.call('change:number',null,number)
//   });

	// init controller
	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.to("#animate", 3, {opacity:1,scale:1});
	var tween2 = TweenMax.to("#animate2",3, {opacity:1,scale:1});
	const H = window.innerHeight;

	// build scene and set duration to window height
  var scene1 = new ScrollMagic.Scene({triggerElement: "#firstTrigger",duration:200})
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
