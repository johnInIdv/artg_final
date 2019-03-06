import * as d3 from 'd3';

import {
	say,
	EnteredPatient
} from '../utils';

//function that puts the values entered into the patient object
function UpdateSecondModule() {

	const newPatientFirst = new EnteredPatient();
	console.log(newPatientFirst);
	document.getElementById('secondOutput').innerHTML = say(newPatientFirst);
	// globalDispatch.call('update:second',null,problemChosen,problemName,name,gender,pain,age,time,zip);
}

export default UpdateSecondModule;
