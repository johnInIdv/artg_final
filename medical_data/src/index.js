import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import * as d3 from 'd3';

import {
	SayThis,
	doIt
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


// const globalDispatch = d3.dispatch('change:number','change:pain','update:first');
//
// globalDispatch.on('change:number',(number) => {
// 	SetClassFunction(number);
// })
//
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

	// build scene and set duration to window height
  var scene1 = new ScrollMagic.Scene({triggerElement: "#firstTrigger",duration:200})
          .setTween(tween1)
          .on('enter',() => {
						// globalDispatch.call('update:first',null);
						doIt();
          })
          .addIndicators({name:"trigger #1"}) // add indicators (requires plugin)
          .addTo(controller);

	var scene2 = new ScrollMagic.Scene({triggerElement: "#secondModule",duration:200})
          .setTween(tween2)
					.on('enter',() => {
					 console.log("just entered second module");
          })
          .addIndicators({name:"trigger #2"}) // add indicators (requires plugin)
          .addTo(controller);

	var scene3 = new ScrollMagic.Scene({triggerElement:"#thirdModule",duration:200})
          .setClassToggle('#animate3','red')
          .on('enter',() => {UpdateThirdModule()})
          .addIndicators({name:"trigger #3"})
          .addTo(controller);
