
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
  "fever":false,
  "vomiting":false,
  "blood_in_vomit":false,
  "diarrhea":false,
  "blood_in_stool": false,
  "risk_factors": false,
},
"actions":{
  "recommendation":"ER",
  "risk":4
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
