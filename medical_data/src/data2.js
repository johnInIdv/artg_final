import {csv} from 'd3';

import {parseInstanceData} from './utils';

const instancesDataPromise = csv('./data/john_viz.csv', parseInstanceData)
	.then(data => data.reduce((acc,v) => acc.concat(v), []));

const headDataPromise = csv('./data/john_viz_head.csv')
	.then(data => data.reduce((acc,v) => acc.concat(v), []));

const abdomenDataPromise = csv('./data/john_viz_abdomen.csv')
	.then(data => data.reduce((acc,v) => acc.concat(v), []));

const kneeDataPromise = csv('./data/john_viz_knee.csv')
	.then(data => data.reduce((acc,v) => acc.concat(v), []));

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
      	"swelling":[true,false],
      	"diarrhea":[true,false],
      	"blood_in_stool":[true,false],
      	"risk_factors":[true,false]
      },
    },//ends abdomen
    "knee": {
      "parameters":{
        "age":['18 – 35','36 – 64','65 and over'],
        "gender":['male','female'],
        "time":['1-3 days','4-7 days','a week or more'],
        "location":["Anterior","Posterior","Medial","Lateral"],
        "pain":["1-3","4-7","8-10"],
      	"fever":[true,false],
      	"vomiting":[true,false],
      	"risk_factors":[true,false],
        "swelling":[true,false]
      },
    },
    "head": {
      "parameters":{
        "age":['18 – 35','36 – 64','65 and over'],
        "gender":['male','female'],
        "time":['1-3 days','4-7 days','a week or more'],
        "location":["Frontal","Deep","Neck"],
        "pain":["1-3","4-7","8-10"],
        "fever":[true,false],
        "vomiting":[true,false],
      	"diarrhea":[true,false],
        "dissy":[true,false],
        "risk_factors":[true,false]
      },
    }
  }


export {
	theData2,
  instancesDataPromise,
  headDataPromise
}
