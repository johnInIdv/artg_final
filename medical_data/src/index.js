import './style.css';
import './bootstrap_bertin/dist/css/bootstrap.css';
import {select, max, dispatch} from 'd3';

import {
	providerData

} from './data';
import {
	problem,
	patient,
	treatmentOption,
	problemF,
	genderOutputHe,
	genderOutputHis,
} from './utils';

//View modules
import UpdateFirstModule from './viewModules/firstModule';
import UpdateSecondModule from './viewModules/secondModule';
import UpdateThirdModule from './viewModules/thirdModule';
import SetClassFunction from './viewModules/SetClassFunction';

const globalDispatch = d3.dispatch('change:number','change:pain','update:first','update:second');

globalDispatch.on('change:number',(number) => {
	SetClassFunction(number);
})

globalDispatch.on('update:first',() => {
	UpdateFirstModule();
})

globalDispatch.on('update:second',() => {
	UpdateSecondModule();
})



//create new medical problems with various pain thresholds
const headache = new problem ('headache',9,8,7,7,4,8,7,5,4,3);
const knee = new problem ('knee',8,7,5,4,3,9,8,7,7,4);
const abdomen = new problem ('abdomen',9,8,5,7,4,8,7,3,5,8);
console.log(headache);

const data = [1,2,3];
const menu = d3.select('#dropDiv');

menu.selectAll('option')
  .data(data).enter()
  .append('option')
  .attr('value',d => d)
  .html(function (d) { return d; });
menu.on('change',function(){
    // console.log(this.value);
    const number = +this.value;

    globalDispatch.call('change:number',null,number)
  });

	// init controller
	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.to("#animate", 3, {opacity:100,scale:2});
	var tween2 = TweenMax.to("#animate2", 3, {opacity:100,scale:2});

	// build scene and set duration to window height
  var scene1 = new ScrollMagic.Scene({triggerElement: "#firstModule",duration:200})
          .setTween(tween1)
          .on('enter',() => {
						globalDispatch.call('update:first',null);
          })
          .addIndicators({name:"trigger #1"}) // add indicators (requires plugin)
          .addTo(controller);

	var scene2 = new ScrollMagic.Scene({triggerElement: "#secondModule",duration:200})
          .setTween(tween2)
					.on('enter',() => {
						globalDispatch.call('update:second',null);
          })
          .addIndicators({name:"trigger #2"}) // add indicators (requires plugin)
          .addTo(controller);

	var scene3 = new ScrollMagic.Scene({triggerElement:"#thirdModule",duration:200})
          // .setClassToggle('#animate3','red')
          .on('enter',() => {UpdateThirdModule()})
          .addIndicators({name:"trigger #3"})
          .addTo(controller);
