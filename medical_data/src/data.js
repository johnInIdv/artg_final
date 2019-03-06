import {
	parseProviderData
} from './utils';

import {csv} from 'd3';

const providerData = csv("./data/small_data_webpack.csv",parseProviderData);

providerData.then(function(d){
  console.log(d);
//returns the cost of each code at each service provider
  const serviceCodesProvided = d3.nest()
    .key(function(d) { return d.provider; })
    .key(function(d) { return d.code; })
    .rollup(function(v) { return d3.sum(v, function(d) { return d.cost;})})
    .entries(d);

  console.log(serviceCodesProvided);
})

export {
	providerData,
}
