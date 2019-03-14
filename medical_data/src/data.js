// import {
// 	parseProviderData,
// 	parseProblemData
// } from './utils';
//
// import {csv,json} from 'd3';
//
// const providerData = csv("./data/small_data_webpack.csv",parseProviderData);
// const problemData = csv("./data/problem.csv", parseProblemData);

const theData = {"abdomen":[
{
  "symptoms":{
    "age":"18 - 45",
    "gender":"male",
    "location":"RLQ",
    "time":"1-2 days",
    "pain":"1-3",
    "fever":true,
    "vomiting":true,
    "blood_in_vomit":true,
    "diarrhea":true,
    "blood_in_stool": true,
    "risk_factors": true,
  },
  "actions":{
    "recommendation":"ER",
    "risk":3
  }
},
{
"symptoms":{
  "age":"18 - 45",
  "gender":"male",
  "location":"RLQ",
  "time":"1-2 days",
  "pain":"1-3",
  "fever":true,
  "vomiting":true,
  "blood_in_vomit":true,
  "diarrhea":true,
  "blood_in_stool": true,
  "risk_factors": false,
},
"actions":{
  "recommendation":"ER",
  "risk":8
}
},
{
"symptoms":{
  "age":"18 - 45",
  "gender":"male",
  "location":"RLQ",
  "time":"1-2 days",
  "pain":"1-3",
  "fever":true,
  "vomiting":true,
  "blood_in_vomit":true,
  "diarrhea":true,
  "blood_in_stool": false,
  "risk_factors": false,
},
"actions":{
  "recommendation":"ER",
  "risk":9
}
}
]}

export {
	theData
}
