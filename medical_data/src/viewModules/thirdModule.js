
const sayHospital = (hospital) => {
	return `You have choosen to go to ${hospital}.`
}

function UpdateThirdModule(){
	var hospital = document.getElementById('hospital').value;
	document.getElementById('thirdOutput').innerHTML = sayHospital(hospital);
}

export default UpdateThirdModule;
