const theData = {"abdomen":[
	{"parameters":[
	  {"age": ['18 – 45','46 – 64','65 and over']},
	  {"gender": ['male','female']},
	  {"time": ['1-3 days','4-7 days','a week or more']},
	  {"location": ["Right Lower Quadrant","Right Upper Quadrant","Left Lower Quadrant","Left Upper Quadrant"]},
	  {"pain": ["1-3","4-7","8-10"]}
	  // "fever": [true,false]
	]
},
{
  "symptoms":{
    "age":"18 – 45",
    "gender":"male",
    "location":"Right Lower Quadrant",
    "time":"1-3 days",
    "pain":"1-3",
    "fever":true,
    "vomiting":true,
    "blood_in_vomit":true,
    "diarrhea":true,
    "blood_in_stool": true,
    "risk_factors": true
  },
  "actions":{
		"ER": 8,
	  "urgent_care": 8,
		"primary_care": 9,
		"nothing": 10
  },
	"recommendation":"ER"
},
{
"symptoms":{
	"age":"18 – 45",
	"gender":"male",
	"location":"Right Lower Quadrant",
	"time":"1-3 days",
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
},
	"recommendation":"ER"
},
{
"symptoms":{
	"age":"18 – 45",
	"gender":"male",
	"location":"Right Lower Quadrant",
	"time":"1-3 days",
	"pain":"1-3",
  "fever":false,
  "vomiting":false,
  "blood_in_vomit":false,
  "diarrhea":false,
  "blood_in_stool": false,
  "risk_factors": false,
},
"actions":{
	"ER": 10,
  "urgent_care": 7,
	"primary_care": 5,
	"nothing": 3
},
"recommendation":"ER"
}
],
"knee":[
{
  "symptoms":{
    "age":"18 - 45",
    "gender":"male",
    "location":"Right Lower Quadrant",
    "time":"1-2 days",
    "pain":"1-3",
    "fever":true,
    "vomiting":true,
    "blood_in_vomit":true,
    "risk_factors": true,
  },
  "actions":{
		"ER": 8,
	  "urgent_care": 8,
		"primary_care": 9,
		"nothing": 10
  },
	"recommendation":"urgent_care"
},
{
"symptoms":{
  "age":"18 - 45",
  "gender":"male",
  "location":"Right Lower Quadrant",
  "time":"1-2 days",
  "pain":"1-3",
  "fever":true,
  "vomiting":true,
  "blood_in_vomit":true,
  "risk_factors": false,
},
"actions":{
  "ER": 2,
  "urgent_care": 4,
	"primary_care": 6,
	"nothing": 8
},
	"recommendation":"urgent_care"
},
{
"symptoms":{
  "age":"18 - 45",
  "gender":"male",
  "location":"Right Lower Quadrant",
  "time":"1-2 days",
  "pain":"1-3",
  "fever":true,
  "vomiting":true,
  "blood_in_vomit":true,
  "risk_factors": false,
},
"actions":{
	"ER": 10,
  "urgent_care": 7,
	"primary_care": 5,
	"nothing": 3
},
"recommendation":"urgent_care"
}
]}


export {
	theData
}
