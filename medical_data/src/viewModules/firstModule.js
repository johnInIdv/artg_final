import * as d3 from 'd3';

import {
	patient,
	problemF,
	summary
} from '../utils';

//function that puts the values entered into the patient object
function UpdateFirstModule() {
		const problemName = document.getElementById("problem").value;
		const problemChosen = problemF(problemName);//this converts string to the corresponding object so I have access to the parameters
		const gender = document.getElementById("gender").value;
		const name = document.getElementById("name").value;
		const pain = document.getElementById("pain").value;
		const age = document.getElementById("age").value;
		const time = document.getElementById("time").value;
		const zip = document.getElementById("zip").value;
	const newPatientFirst = new patient(problemChosen,problemName,name,gender,pain,age,time,zip);
	console.log(newPatientFirst);
	document.getElementById('firstOutput').innerHTML = summary(newPatientFirst);
	// globalDispatch.call('update:second',null,problemChosen,problemName,name,gender,pain,age,time,zip);
}

export default UpdateFirstModule;
