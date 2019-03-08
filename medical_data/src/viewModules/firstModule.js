import * as d3 from 'd3';

import {
	summary,
	EnteredPatient
} from '../utils';

import problemData from '../data';

//function that puts the values entered into the patient object
function UpdateFirstModuleOutputs() {

	const newPatientFirst = new EnteredPatient();
	console.log(newPatientFirst);
	document.getElementById('firstLeftModuleOutput').innerHTML = summary(newPatientFirst);
	document.getElementById('firstRightModuleOutput').innerHTML = "Total Bill so far: $0";
	// globalDispatch.call('update:second',null,problemChosen,problemName,name,gender,pain,age,time,zip);
}

function UpdateFirstModuleViz(a){
	console.log(a);
}

export {
	UpdateFirstModuleViz,
	UpdateFirstModuleOutputs
};
