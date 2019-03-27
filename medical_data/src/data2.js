const theData2 =
  {  "abdomen": {
      "parameters":{
        "age":['18 – 45','46 – 64','65 and over'],
        "gender":['male','female'],
        "time":['1-3 days','4-7 days','a week or more'],
        "location":["Right Lower Quadrant","Right Upper Quadrant","Left Lower Quadrant","Left Upper Quadrant"],
        "pain":["1-3","4-7","8-10"],
      	"fever":[true,false],
      	"vomiting":[true,false],
      	"blood_in_vomit":[true,false],
      	"diarrhea":[true,false],
      	"blood_in_stool":[true,false],
      	"risk_factors":[true,false]
      },
      "instances": {
          "ab1": {
            "symptoms": {
              "age":"18 – 45",
              "gender":"male",
              "location":"Right Lower Quadrant",
              "time":"1-3 days",
              "pain":"1-3",
              "fever":false,
              "vomiting":false,
              "blood_in_vomit":false,
              "diarrhea":false,
              "blood_in_stool":false,
              "risk_factors":false
          },
            "actions": {
              "ER": 8,
              "urgent_care": 3,
              "primary_care": 9,
              "nothing": 2
          },
           "recommendation":"ER"
        },//ends abdomen instances{
        "ab2": {
          "symptoms": {
            "age":"18 – 45",
            "gender":"male",
            "location":"Right Lower Quadrant",
            "time":"1-3 days",
            "pain":"1-3",
            "fever":true,
            "vomiting":false,
            "blood_in_vomit":false,
            "diarrhea":false,
            "blood_in_stool":false,
            "risk_factors":false
        },
          "actions": {
            "ER": 8,
            "urgent_care": 3,
            "primary_care": 9,
            "nothing": 2
        },
         "recommendation":"ER"
      },
      "ab3": {
        "symptoms": {
          "age":"18 – 45",
          "gender":"male",
          "location":"Right Lower Quadrant",
          "time":"1-3 days",
          "pain":"1-3",
          "fever":true,
          "vomiting":true,
          "blood_in_vomit":false,
          "diarrhea":false,
          "blood_in_stool":false,
          "risk_factors":false
      },
        "actions": {
          "ER": 8,
          "urgent_care": 3,
          "primary_care": 9,
          "nothing": 2
      },
       "recommendation":"ER"
      }
      }
    },//ends abdomen
    "knee": {
        "parameters":{
          "age":['18 – 35','36 – 64','65 and over'],
          "gender":['male','female'],
          "time":['1-3 days','4-7 days','a week or more'],
          "location":["Right Side","Right Top","Left Side","Left Top"],
          "pain":["1-3","4-7","8-10"],
        	"fever":[true,false],
        	"vomiting":[true,false],
        	"blood_in_vomit":[true,false],
        	"diarrhea":[true,false],
        	"blood_in_stool":[true,false],
        	"risk_factors":[true,false]
        },
        "instances": {
            "knee1": {
              "symptoms": {
                "age":"18 – 35",
                "gender":"male",
                "location":"Right Side",
                "time":"1-3 days",
                "pain":"1-3",
                "fever":false,
                "vomiting":false,
                "blood_in_vomit":false,
                "diarrhea":false,
                "blood_in_stool":false,
                "risk_factors":false
            },
              "actions": {
                "ER": 8,
                "urgent_care": 9,
                "primary_care": 2,
                "nothing": 2
            },
             "recommendation":"ER"
          },//ends abdomen instances{
      "knee2": {
        "symptoms": {
          "age":"18 – 55",
          "gender":"male",
          "location":"Right Side",
          "time":"1-3 days",
          "pain":"1-3",
          "fever":true,
          "vomiting":false,
          "blood_in_vomit":false,
          "diarrhea":false,
          "blood_in_stool":false,
          "risk_factors":false
      },
        "actions": {
          "ER": 2,
          "urgent_care": 9,
          "primary_care": 9,
          "nothing": 10
      },
       "recommendation":"ER"
    },
    "knee3": {
      "symptoms": {
        "age":"18 – 35",
        "gender":"male",
        "location":"Right Side",
        "time":"1-3 days",
        "pain":"1-3",
        "fever":true,
        "vomiting":true,
        "blood_in_vomit":false,
        "diarrhea":false,
        "blood_in_stool":false,
        "risk_factors":false
    },
      "actions": {
        "ER": 4,
        "urgent_care": 3,
        "primary_care": 2,
        "nothing": 6
    },
     "recommendation":"ER"
      }
    }
  }//ends knee
}
  //         [ "symptoms",
  //           [ ["age","18 – 45"],
  //             ["gender","male"],
  //             ["location","Right Lower Quadrant"],
  //             ["time","1-3 days"],
  //             ["pain","1-3"],
  //             ["fever",true],
  //             ["vomiting",false],
  //             ["blood_in_vomit",false],
  //             ["diarrhea",false],
  //             ["blood_in_stool",false],
  //             ["risk_factors",false] ]
  //         ],
  //         ["actions",
  //           [ ["ER", 4],
  //             ["urgent_care", 9],
  //             ["primary_care", 3],
  //             ["nothing", 8] ]
  //         ],
  //         ["recommendation","urgent_care"],
  //         [ "symptoms",
  //           [ ["age","18 – 45"],
  //             ["gender","male"],
  //             ["location","Right Lower Quadrant"],
  //             ["time","1-3 days"],
  //             ["pain","1-3"],
  //             ["fever",true],
  //             ["vomiting",true],
  //             ["blood_in_vomit",false],
  //             ["diarrhea",false],
  //             ["blood_in_stool",false],
  //             ["risk_factors",false] ]
  //         ],
  //         ["actions",
  //           [ ["ER", 2],
  //             ["urgent_care", 4],
  //             ["primary_care", 5],
  //             ["nothing", 10] ]
  //         ],
  //         ["recommendation","ER"] ]
  // },//ends first instance
  // {"knee":
  //     {"parameters":
  //       [
  //       ["age",['18 – 45','46 – 64','65 and over']],
  //       ["gender",['male','female']],
  //       ["time",['1-3 days','4-7 days','a week or more']],
  //       ["location",["Right Lower Quadrant","Right Upper Quadrant","Left Lower Quadrant","Left Upper Quadrant"]],
  //       ["pain",["1-3","4-7","8-10"]],
  //     	["fever",[true,false]],
  //     	["vomiting",[true,false]],
  //     	["blood_in_vomit",[true,false]],
  //     	["diarrhea",[true,false]],
  //     	["blood_in_stool",[true,false]],
  //     	["risk_factors",[true,false]]
  //    ]},
  //      "instances": [
  //         [ "symptoms",
  //           [ ["age","18 – 45"],
  //             ["gender","male"],
  //             ["location","Right Lower Quadrant"],
  //             ["time","1-3 days"],
  //             ["pain","1-3"],
  //             ["fever",false],
  //             ["vomiting",false],
  //             ["blood_in_vomit",false],
  //             ["diarrhea",false],
  //             ["blood_in_stool",false],
  //             ["risk_factors",false] ]
  //         ],
  //         ["actions",
  //           [ ["ER", 8],
  //             ["urgent_care", 3],
  //             ["primary_care", 9],
  //             ["nothing", 2] ]
  //         ],
  //         ["recommendation","ER"],
  //         [ "symptoms",
  //           [ ["age","18 – 45"],
  //             ["gender","male"],
  //             ["location","Right Lower Quadrant"],
  //             ["time","1-3 days"],
  //             ["pain","1-3"],
  //             ["fever",true],
  //             ["vomiting",false],
  //             ["blood_in_vomit",false],
  //             ["diarrhea",false],
  //             ["blood_in_stool",false],
  //             ["risk_factors",false] ]
  //         ],
  //         ["actions",
  //           [ ["ER", 4],
  //             ["urgent_care", 9],
  //             ["primary_care", 3],
  //             ["nothing", 8] ]
  //         ],
  //         ["recommendation","urgent_care"],
  //         [ "symptoms",
  //           [ ["age","18 – 45"],
  //             ["gender","male"],
  //             ["location","Right Lower Quadrant"],
  //             ["time","1-3 days"],
  //             ["pain","1-3"],
  //             ["fever",true],
  //             ["vomiting",true],
  //             ["blood_in_vomit",false],
  //             ["diarrhea",false],
  //             ["blood_in_stool",false],
  //             ["risk_factors",false] ]
  //         ],
  //         ["actions",
  //           [ ["ER", 2],
  //             ["urgent_care", 4],
  //             ["primary_care", 5],
  //             ["nothing", 10] ]
  //         ],
  //         ["recommendation","ER"] ]

// ]
// }
// theData.problem.abdomen.parameters



  //
  //
  //
  //       [ [ {"age":"18 – 45"},
  //         {"gender":"male"},
  //         {"location":"Right Lower Quadrant"},
  //         {"time":"1-3 days"},
  //         {"pain":"1-3"},
  //         {"fever":false},
  //         {"vomiting":false},
  //         {"blood_in_vomit":false},
  //         {"diarrhea":false},
  //         {"blood_in_stool": false},
  //         {"risk_factors": false} ],
  //       {"actions":{
  //         "ER": 2,
  //         "urgent_care": 8,
  //         "primary_care": 3,
  //         "nothing": 8}
  //       },
  //       {"recommendation":"ER"} ],
  //       [ [ {"age":"18 – 45"},
  //         {"gender":"male"},
  //         {"location":"Right Lower Quadrant"},
  //         {"time":"1-3 days"},
  //         {"pain":"1-3"},
  //         {"fever":false},
  //         {"vomiting":false},
  //         {"blood_in_vomit":false},
  //         {"diarrhea":false},
  //         {"blood_in_stool": false},
  //         {"risk_factors": false} ],
  //       {"actions":{
  //         "ER": 2,
  //         "urgent_care": 2,
  //         "primary_care": 9,
  //         "nothing": 10
  //       }},
  //       {"recommendation":"ER"} ],
  //       ]
  //     }
  //   }
  // }




//
//
//
//
// }
//   "abdomen":[
// {
//   "symptoms":{
//     "age":"18 – 45",
//     "gender":"male",
//     "location":"Right Lower Quadrant",
//     "time":"1-3 days",
//     "pain":"1-3",
//     "fever":false,
//     "vomiting":false,
//     "blood_in_vomit":false,
//     "diarrhea":false,
//     "blood_in_stool": false,
//     "risk_factors": false
//   },
//   "actions":{
// 		"ER": 8,
// 	  "urgent_care": 8,
// 		"primary_care": 9,
// 		"nothing": 10
//   },
// 	"recommendation":"ER"
// },
// {
// "symptoms":{
// 	"age":"18 – 45",
// 	"gender":"male",
// 	"location":"Right Lower Quadrant",
// 	"time":"1-3 days",
// 	"pain":"1-3",
//   "fever":true,
//   "vomiting":false,
//   "blood_in_vomit":false,
//   "diarrhea":false,
//   "blood_in_stool": false,
//   "risk_factors": false,
// },
// "actions":{
//   "ER": 2,
//   "urgent_care": 4,
// 	"primary_care": 6,
// 	"nothing": 8
// },
// 	"recommendation":"ER"
// },
// {
// "symptoms":{
// 	"age":"18 – 45",
// 	"gender":"male",
// 	"location":"Right Lower Quadrant",
// 	"time":"1-3 days",
// 	"pain":"1-3",
//   "fever":true,
//   "vomiting":true,
//   "blood_in_vomit":false,
//   "diarrhea":false,
//   "blood_in_stool": false,
//   "risk_factors": false,
// },
// "actions":{
// 	"ER": 10,
//   "urgent_care": 7,
// 	"primary_care": 5,
// 	"nothing": 3
// },
// "recommendation":"ER"
// }
// ],
// "knee":[
// {
//   "symptoms":{
//     "age":"18 – 24",
//     "gender":"male",
//     "location":"Right side",
//     "time":"1-3 days",
//     "pain":"1-3",
//     "fever":false,
//     "vomiting":false,
//     "blood_in_vomit":false,
//     "risk_factors": false
//   },
//   "actions":{
// 		"ER": 8,
// 	  "urgent_care": 8,
// 		"primary_care": 9,
// 		"nothing": 10
//   },
// 	"recommendation":"urgent_care"
// },
// {
// "symptoms":{
// 	"age":"18 – 24",
// 	"gender":"male",
// 	"location":"Right side",
// 	"time":"1-3 days",
// 	"pain":"1-3",
// 	"fever":true,
// 	"vomiting":false,
// 	"blood_in_vomit":false,
// 	"risk_factors": false
// },
// "actions":{
//   "ER": 2,
//   "urgent_care": 4,
// 	"primary_care": 6,
// 	"nothing": 8
// },
// 	"recommendation":"urgent_care"
// },
// {
// "symptoms":{
// 	"age":"18 – 24",
// 	"gender":"male",
// 	"location":"Right side",
// 	"time":"1-3 days",
// 	"pain":"1-3",
// 	"fever":true,
// 	"vomiting":true,
// 	"blood_in_vomit":false,
// 	"risk_factors": false
// },
// "actions":{
// 	"ER": 10,
//   "urgent_care": 7,
// 	"primary_care": 5,
// 	"nothing": 3
// },
// "recommendation":"urgent_care"
// }
// ]}


export {
	theData2
}
