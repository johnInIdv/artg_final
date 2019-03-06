// import {nest} from 'd3';

//Utility functions for parsing metadata, migration data, and country code
function parseProviderData(d){
    return{
    provider: d['ProviderName'],
    npi: +d.ProviderNPI,
    cost: +d.CostEstimate,
    code: +d.ServiceCode,
    services: +d.NumberServices,
    description: d.ServiceDescriptionForInjury,
    lat: +d.lat,
    lon: +d.lon
  }
}

//create constructor funciton to easily create new problems with various parameters
const problem = function ProblemVariable (
      problemName,
      highestPainOverall,
      highestPainWithTime,
      highestTimeWithPain,
      highestPainWithTimeAndAge,
      highestTimeWithPainAndAge,
      highestPainOverallU,
      highestPainWithTimeU,
      highestTimeWithPainU,
      highestPainWithTimeAndAgeU,
      highestTimeWithPainAndAgeU
  ){
      this.problemName = problemName,
      this.highestPainOverall = highestPainOverall,
      this.highestPainWithTime = highestPainWithTime,
      this.highestTimeWithPain = highestTimeWithPain,
      this.highestPainWithTimeAndAge = highestPainWithTimeAndAge,
      this.highestTimeWithPainAndAge = highestTimeWithPainAndAge,
      this.highestPainOverallU = highestPainOverallU,
      this.highestPainWithTimeU = highestPainWithTimeU,
      this.highestTimeWithPainU = highestTimeWithPainU,
      this.highestPainWithTimeAndAgeU = highestPainWithTimeAndAgeU,
      this.highestTimeWithPainAndAgeU = highestTimeWithPainAndAgeU
  };

	//new Patient function
	const patient = function Patient(problem,problemName,name,gender,pain,age,time,zip){
	  this.patientProblem = problem,
	  // this.problem = problemF(patientProblem)
	  this.problemName = problemName,
	  this.name = name,
	  this.gender = gender,
	  this.pain = +pain,
	  this.age = +age,
	  this.time = +time,
	  this.zip = zip
	}

	//create constructor function for new treatment options
	const treatmentOption = function treatOptions (
	      treatmentName,
	      expenseLevel,
	){
	      this.treatmentName = treatmentName,
	      this.expenseLevel = expenseLevel
	}

	//create new medical problems with various pain thresholds
	const headache = new problem ('headache',9,8,7,7,4,8,7,5,4,3);
	const knee = new problem ('knee',8,7,5,4,3,9,8,7,7,4);
	const abdomen = new problem ('abdomen',9,8,5,7,4,8,7,3,5,8);

	//algorthim to determine the best recommendation based on the patient and presenting problem
	const recommendation = function(patient,problem){
	      if (patient.pain > problem.highestPainOverall) {return 'ER';}
	      else if ((patient.pain > problem.highestPainWithTime) && (patient.time > problem.highestTimeWithPain)){return 'ER';}
	      else if ((patient.pain > problem.highestPainWithTimeAndAge) && (patient.time > problem.highestTimeWithPainAndAge) && ((patient.age < 19) || (patient.age > 64))){return 'ER';}
	      else if (patient.pain > problem.highestPainOverallU) {return 'Urgent Care';}
	      else if ((patient.pain > problem.highestPainWithTimeU) && (patient.time > problem.highestTimeWithPainU)){return 'Urgent Care';}
	      else if ((patient.pain > problem.highestPainWithTimeAndAgeU) && (patient.time > problem.highestTimeWithPainAndAgeU) && ((patient.age < 19) || (patient.age > 64))){return 'Urgent Care';}
	      else {return false;}
	}



	//problemF converts the string element to the problem objects created wiht parameters
	const problemF = function(problem){
	var problem = document.getElementById("problem").value;
	if (problem === "Abdomen"){
	return abdomen;
	}
	else if (problem === "Headache"){
	return headache;
	}
	else if (problem === "Knee"){
	return knee;
	}
	else {return "Choose a valid problem."}
	}

//builds functions for the output by the say() function
  const genderOutputHe = (patient) => {
  if (patient.gender === "Male"){ return "he" }
  else {return "she"}
  }
  const genderOutputHis = (patient) => {
  if (patient.gender === "Male"){ return "his" }
  else {return "her"}
  }

	const summary = (patient) => {
		return `Patient presenting a problem with ${genderOutputHis(patient)} ${patient.problemName}:
			First name: ${patient.name}
			Gender: ${patient.gender}
			Age: ${patient.age}
			Pain level: ${patient.pain}
			Zip code: ${patient.zip}
			Time since pain began: ${patient.time} `
	}

	const say = (patient,problem) => {
		console.log(problem);
   return `I like ${patient.name} but given that ${genderOutputHe(patient)} has a pain level \
of ${patient.pain} for ${genderOutputHis(patient)} ${patient.problemName}, \
${genderOutputHe(patient)} will \
need to go the ${recommendation(patient,problem)}.`;
  }

export {
	parseProviderData,
	problem,
	patient,
	treatmentOption,
	problemF,
	genderOutputHe,
	genderOutputHis,
	summary,
	say
}
