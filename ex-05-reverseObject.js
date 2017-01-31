// Ex-05 reverseObject()

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.


var reverseObject = function(inputObject){
	var temporaryArray = []''
	var newObject = [];
	for (var key in inputObject[0]){
		temporaryArray.push(key);
	}
	for(var i = temporaryArray.length-1; >=0; i--){
		NewObject[temporaryArray[i]] = [];
	}
	return newObject
// for(var i = 0; i < inputObject.length; i++)
// 	for(object.key[i] in inputObject)
// 		inputObject.push(newObject)
// }
//








//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var object1 = {
	 occupants: 4,
	 apartment_no: "2b",
	 structuralIntegrity: "failing",
	 squareFeet: 700
}

var object2 = {
	name: "Abby",
	gender: "female",
	description: "dog",
	paws: 4
}

var reversedObj_1 = reverseObject(object1)
var reversedObj_2 = reversedObj(object2)

console.assert( reversedObj_1['2b'] === 'apartment_no' )
console.assert( reversedObj_1.failing === 'structuralIntegrity' )
//-----------------------------
console.assert( reversedObj_2.dog === 'description')
console.assert( reversedObj_2.female === 'gender')
