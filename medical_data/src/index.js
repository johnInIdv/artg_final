import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	abdomenViz,
	getFormElements,
	FormDisplay,
	GetResults,
	GetRisks
} from './utils';

import {
	instancesDataPromise,
	headDataPromise,
	theData2
} from './data2';

//I'm adding a comment
const values = GetRisks();

const globalDispatch = d3.dispatch('make:bars','ui-event','store:labels','update:first','get:inputs','get:ids');

globalDispatch.on('make:bars', () => {
	abdomenViz();
});

const form = FormDisplay()
		.selectFormLocation(document.getElementById('theFormLocation'));

//Log UI interactions
globalDispatch.on('ui-event', () => {
	form();
	});

globalDispatch.on('get:inputs',() => {
	// the function that logs the values
	values();
});

//Button interactions
d3.select('#problem').on('change', function(){
	globalDispatch.call(
		'ui-event',
		null,
	);
	//
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
						// globalDispatch.call('make:bars',null);

						globalDispatch.call('get:inputs',null,);
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
