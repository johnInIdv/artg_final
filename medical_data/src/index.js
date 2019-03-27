import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	abdomenViz,
	getFormElements,
	FormDisplay,
	GetResults
} from './utils';

import {
	theData,
} from './data';

import {
	theData2,
} from './data2';


const good = 'abdomen';
// console.log(theData2[good].instances[0]);
var myObj, x;
// const problemsArray = [];
const secondArray = [];
// for (x in theData2) {
//   // document.getElementById("demo").innerHTML += x + "<br>";
// 	problemsArray.push(x);
// 	secondArray.push(theData2[abdomen][x]);
// }
// console.log(problemsArray);
// console.log(secondArray);

for (x in theData2[good].instances){
	console.log(theData2[good].instances[x].symptoms);
	secondArray.push(theData2[good].instances[x].symptoms[x]);
}
console.log(secondArray);
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

//Log UI interactions
globalDispatch.on('ui-event', () => {
	const problemPicked = document.getElementById("problem").value;
	getFormElements(theData2[problemPicked].parameters);
	});

//Button interactions
d3.selectAll('#problem').on('change', function(){
	globalDispatch.call(
		'ui-event',
		null,
	);
});



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
