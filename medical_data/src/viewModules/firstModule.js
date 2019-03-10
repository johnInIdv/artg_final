import * as d3 from 'd3';

import {
	summary,
	EnteredPatient,
	NewEnteredPatient
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


function GetRecRisk (d){

let result;
d.forEach((d,i) => {
	const thePatient = new NewEnteredPatient();
//if these parameters match, it grabs the matching object and all the other variables, like recommendation and risk
	if (thePatient.problem == d.problem && thePatient.day == d.day && thePatient.age == d.age
		&& thePatient.pain == d.pain) { result = d; }

	})
console.log(result.risk);
console.log(result.recommendation);
}



export {
	UpdateFirstModuleViz,
	UpdateFirstModuleOutputs,
	GetRecRisk
};
