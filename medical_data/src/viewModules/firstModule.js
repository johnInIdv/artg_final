import * as d3 from 'd3';

import {
	summary,
	EnteredPatient
} from '../utils';

//function that puts the values entered into the patient object
function UpdateFirstModule() {

	const newPatientFirst = new EnteredPatient();
	console.log(newPatientFirst);
	document.getElementById('firstOutput').innerHTML = summary(newPatientFirst);
	// globalDispatch.call('update:second',null,problemChosen,problemName,name,gender,pain,age,time,zip);
}

export default UpdateFirstModule;
