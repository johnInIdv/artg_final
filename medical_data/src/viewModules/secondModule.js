import * as d3 from 'd3';

import {
	patient,
	problemF,
	say
} from '../utils';

function UpdateSecondModule(){
    var problemName = document.getElementById("problem").value;
    var problem = problemF();//this converts string to the corresponding object so I have access to the parameters
    var gender = document.getElementById("gender").value;
    var name = document.getElementById("name").value;
    var pain = document.getElementById("pain").value;
    var age = document.getElementById("age").value;
    var time = document.getElementById("time").value;
    var zip = document.getElementById("zip").value;

    const newPatientSecond = new patient(problem,problemName,name,gender,pain,age,time,zip);
    document.getElementById('secondOutput').innerHTML = say(newPatientSecond,problem);
  }

export default UpdateSecondModule;
