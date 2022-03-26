// code your solution here
const saturdayFun = function(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair ='*'){

	const innerFunction = function(param ='special'){
		return `You are ${visualFlair}${param}${visualFlair}!`
	}
	return innerFunction
}