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
		"ER": 8,
	  "urgent_care": 8,
		"primary_care": 9,
		"nothing": 10
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
  "ER": 2,
  "urgent_care": 4,
	"primary_care": 6,
	"nothing": 8
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
	"ER": 10,
  "urgent_care": 7,
	"primary_care": 5,
	"nothing": 3
}
}
]}


export {
	theData
}
