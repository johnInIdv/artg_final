import {select} from 'd3';


export default function SetClassFunction(number){
	function setClass (div,color){
		const selectDiv = d3.select(div);
		selectDiv.attr('class', color);
	}

	if (number === 1){

		setClass('#div1','red');
		setClass('#div2','blue');
		setClass('#div3','yellow');
	}
	else if (number === 2){
		setClass('#div1','yellow');
		setClass('#div2','red');
		setClass('#div3','blue');
	}
	else if (number === 3){
		setClass('#div1','blue');
		setClass('#div2','yellow');
		setClass('#div3','red');
	}
}
