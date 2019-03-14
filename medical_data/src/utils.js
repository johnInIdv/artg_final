// import {nest} from 'd3';
import GetRecRisk from './viewModules/firstModule';
import {
	theData,
} from './data';
//Utility functions for parsing metadata, migration data, and country code
// function parseProviderData(d){
//     return{
//     provider: d['ProviderName'],
//     npi: +d.ProviderNPI,
//     cost: +d.CostEstimate,
//     code: +d.ServiceCode,
//     services: +d.NumberServices,
//     description: d.ServiceDescriptionForInjury,
//     lat: +d.lat,
//     lon: +d.lon
//   }
// }
//
// function parseProblemData(d){
//   return{
//     problem: d["Problem"],
//     day: +d.Day,
//     age: +d.Age,
//     // () => {
//     //   if (d.Age === "1"){
//     //     return "Under 18";
//     //   } else if (d.Age === "2"){
//     //     return "18 - 65";
//     //   } else if (d.Age === "3"){
//     //     return "Over 65";
//     //   }
//     // },
//     pain: +d.Pain,
//     recommendation: d["Recommendation"],
//     risk: +d.Risk
//   }
// }


const DoIt = function (){
let riskData = [];
  const theNewData = {
   "symptoms":{
     "age": document.getElementById("age").value,
     "gender":document.getElementById("gender").value,
     "location":document.getElementById("location").value,
     "time":document.getElementById("time").value,
     "pain":document.getElementById("pain").value,
     "fever":document.getElementById("fever").checked,
     "vomiting":document.getElementById("vomiting").checked,
     "blood_in_vomit":document.getElementById("blood_in_vomit").checked,
     "diarrhea":document.getElementById("diarrhea").checked,
     "blood_in_stool": document.getElementById("blood_in_stool").checked,
     "risk_factors": document.getElementById("risk_factors").checked,
   }}

console.log(theNewData);
console.log(theData.abdomen[0].symptoms);
  var i;
  for (i = 0; i < 2; i++){
    if ((theNewData.symptoms.age) == (theData.abdomen[i].symptoms.age)&&
        (theNewData.symptoms.gender) == (theData.abdomen[i].symptoms.gender)&&
        (theNewData.symptoms.location) == (theData.abdomen[i].symptoms.location)&&
        (theNewData.symptoms.time) == (theData.abdomen[i].symptoms.time)&&
        (theNewData.symptoms.pain) == (theData.abdomen[i].symptoms.pain)&&
        (theNewData.symptoms.fever) == (theData.abdomen[i].symptoms.fever)&&
        (theNewData.symptoms.vomiting) == (theData.abdomen[i].symptoms.vomiting)&&
        (theNewData.symptoms.blood_in_vomit) == (theData.abdomen[i].symptoms.blood_in_vomit)&&
        (theNewData.symptoms.diarrhea) == (theData.abdomen[i].symptoms.diarrhea)&&
        (theNewData.symptoms.blood_in_stool) == (theData.abdomen[i].symptoms.blood_in_stool)&&
        (theNewData.symptoms.risk_factors) == (theData.abdomen[i].symptoms.risk_factors)
  ){
    // return {theData[i]};
    riskData.push(theData.abdomen[i].actions.risk);
    // riskData.push(theData.abdomen[i].actions.risk);
    console.log("the risk for this is: " + theData.abdomen[i].actions.risk);
    console.log("the recommendation is to go to the: " + theData.abdomen[i].actions.recommendation);
    }
   else {console.log("not the same");}
}
UpdateBar(riskData);
}

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    w = 900 - margin.left - margin.right,
    h = 400 - margin.top - margin.bottom;

// set the ranges
var y = d3.scaleBand()
          .range([h, 0])
          .padding(0.1);

var x = d3.scaleLinear()
          .range([0, w]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var riskBar = d3.select("#svg").append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


const UpdateBar = function(data) {
console.log(data);


const color = d3.scaleOrdinal(d3.schemeCategory10);

const bars = riskBar.selectAll('.bar')
    .data(data);//will need to fiddle with the data

  bars.select('rect')
    .attr('fill','red')
    .attr('h', 10)
    .attr('w',50)
    .attr('x',50)
    .attr('y',50)


  //enter
  const barsEnter = bars.enter()
      .append('g').attr('class','node');
    barsEnter.append('rect')
    .attr('height', 20)
    .attr('width', d => d * 10)
    .attr('x',60)
    .attr("y", 50)
    .attr('fill',color)
      // .style('fill', 'yellow'); //circles in the ENTER selection are colored differently
    barsEnter.append('text')
      .attr('text-anchor', 'middle');

      // UPDATE + ENTER
    	// Both of their 'transform' attributes are the set the same way
    	//so we merge them
    	bars.merge(barsEnter)
    		.transition()
    		// .attr('transform', d => `translate(${d.x}, ${d.y})`);
    	bars.merge(barsEnter)
    		.select('text')
    		.text('The Bar');
    	bars.merge(barsEnter)
    		.select('rect')
    		.transition()
    		.attr('h', 10)
        .attr('w',d => d * 10)
        .attr('x',20)
        .attr("y", 50)
        .attr('fill',color)
}


//create constructor funciton to easily create new problems with various parameters
const Problem = function (
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

	//problemF converts the string element to the problem objects created wiht parameters
	const problemF = function(problem){
	var problem = document.getElementById("problem").value;
	if (problem === 'Abdomen'){
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

	//new Patient function
	const Patient = function (problemName,name,gender,pain,age,time,zip){
	  this.problemName = problemName,
	  this.problem = problemF(this.problemName)
	  this.name = name,
	  this.gender = gender,
	  this.pain = +pain,
	  this.age = +age,
	  this.time = +time,
	  this.zip = zip
	}

  //new Patient function
  const EnteredPatient = function (){
    this.problemName = document.getElementById("problem").value,
    this.problem = problemF(this.problemName),//this converts string to the corresponding object so I have access to the parameters
    this.gender = document.getElementById("gender").value,
    this.name = document.getElementById("name").value,
    this.pain = document.getElementById("pain").value,
    this.age = document.getElementById("age").value,
    this.day = document.getElementById("day").value,
    this.zip = document.getElementById("zip").value
  }

  const NewEnteredPatient = function(){
    this.problem = document.getElementById("problem").value,
    this.day = +document.getElementById("day").value,
    this.age = +document.getElementById("age").value,
    this.pain = +document.getElementById("pain").value
    // this.problem = problem,
	  // this.day = +day,
	  // this.age = +age,
    // this.pain = +pain
  }

  //create constructor function for new treatment options
  const TreatmentOption = function (
  			treatmentName,
  			expenseLevel,
  			waitTime,
  			potentialRisk
  ){
  			this.treatmentName = treatmentName,
  			this.expenseLevel = expenseLevel,
  			this.waitTime = waitTime,
  			this.potentialRisk = potentialRisk
  }

//these treatment options run through the recommendation function and then their variables
// get printed out in the say function
  const er = new TreatmentOption ('ER','$$$$',"minutes to an hour",'low');
  const urgent_care = new TreatmentOption ('Urgent Care','$$$','up to 12 hours','moderate');
  const primary_care = new TreatmentOption ('Primary Care', '$$','1-3 days','moderate');
  const nothing = new TreatmentOption ('Nothing', '$?','not applicable','high');


	//create new medical problems with various pain thresholds
	const headache = new Problem ('headache',9,8,7,7,4,8,7,5,4,3);
	const knee = new Problem ('knee',8,7,5,4,3,9,8,7,7,4);
	const abdomen = new Problem ('abdomen',9,8,5,7,4,8,7,3,5,8);

	//algorthim to determine the best recommendation based on the patient and presenting problem
	const recommendation = function(patient){
    	var problem = patient.problem;
	      if (patient.pain > problem.highestPainOverall) {return er;}
	      else if ((patient.pain > problem.highestPainWithTime) && (patient.time > problem.highestTimeWithPain)){return 'ER';}
	      else if ((patient.pain > problem.highestPainWithTimeAndAge) && (patient.time > problem.highestTimeWithPainAndAge) && ((patient.age < 19) || (patient.age > 64))){return 'ER';}
	      else if (patient.pain > problem.highestPainOverallU) {return 'Urgent Care';}
	      else if ((patient.pain > problem.highestPainWithTimeU) && (patient.time > problem.highestTimeWithPainU)){return 'Urgent Care';}
	      else if ((patient.pain > problem.highestPainWithTimeAndAgeU) && (patient.time > problem.highestTimeWithPainAndAgeU) && ((patient.age < 19) || (patient.age > 64))){return 'Urgent Care';}
	      else {return false;}
	}

// const john = new Patient('Abdomen','John','Male',10,33,4,'03833')
// console.log(recommendation(john).waitTime);

//builds functions for the output by the say() function
  const genderOutputHe = (patient) => {
  if (patient.gender === "Male"){ return "he" }
  else {return "she"}
  }
  const genderOutputHis = (patient) => {
  if (patient.gender === "Male"){ return "his" }
  else {return "her"}
  }

	const summary = (patient,riskFunction) => {
		return `Patient presenting a problem with ${genderOutputHis(patient)} ${patient.problemName}:
			First name: ${patient.name}
			Gender: ${patient.gender}
			Age: ${patient.age}
			Pain level: ${patient.pain}
			Zip code: ${patient.zip}
			Days since pain began: ${patient.day} `
	}

	const say = (patient) => {
		// console.log(problem);
   return `I like ${patient.name} but given that ${genderOutputHe(patient)} has a pain level \
of ${patient.pain} for ${genderOutputHis(patient)} ${patient.problemName}, \
${genderOutputHe(patient)} will \
need to go the ${recommendation(patient).treatmentName}, which should take \
${recommendation(patient).waitTime}, cost ${recommendation(patient).expenseLevel}, and \
comes with a risk that is ${recommendation(patient).expenseLevel}.`;
  }

export {
  UpdateBar,
  DoIt
	// parseProviderData,
  // parseProblemData,
	// Problem,
	// patient,
	// treatmentOption,
	// problemF,
	// genderOutputHe,
	// genderOutputHis,
	// summary,
  // EnteredPatient,
  // NewEnteredPatient,
	// say
}
