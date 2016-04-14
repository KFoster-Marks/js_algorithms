/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

The Plan
0. ***create string variable for each source key
1. ***loop though each object of collection array
2. ***for each object, check to see if key #1 exists collection[i] & its value matches source w/ same key
3. ***If they match, check to see if key #2 exists & matches
4. ***If it matches, too push collection[i] to array, and return that array
*/

function whereAreYou(collection, source) {
	var arr = [];
	var sourceKeys = Object.keys(source);
	console.log("There are " + sourceKeys.length + " keys in this object.");
	if (sourceKeys.length == 1) {
		var sourceKey = Object.keys(source).toString();
		console.log("Only one key exists; doing the first loop");
		for (i=0; i<collection.length; i++) {
			console.log(collection[i]);
			if (collection[i].hasOwnProperty(sourceKey) && collection[i][sourceKey] == source[sourceKey]) {
				console.log("The key exists, and it matches");
				arr.push(collection[i]);
			} else {
				console.log("That key-value pair does not exist");
			}
		}
	}
	else if (sourceKeys.length == 2) {
		var key1 = sourceKeys[0];
		var key2 = sourceKeys[1];
		//console.log(sourceKeys, key1, key2);
		for (i=0; i<collection.length; i++) {
			console.log(collection[i]);
			if (collection[i].hasOwnProperty(key1) && collection[i].hasOwnProperty(key2)) {
				console.log("Both keys exist in the target object");
				//console.log(collection[i][key1]);
				//console.log(source[key2]);
				if (collection[i][key1] == source[key1] && collection[i][key2] == source[key2]) {
					console.log("Both key-value pairs match, so we'll push to the array");
					arr.push(collection[i]);
				}
			} else {
				console.log("Both keys do not exist in the target object");
			}
		}
	}
  return arr;
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); /* should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }] */
//whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); /*should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }] */
//whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); /* should return [{ first: "Tybalt", last: "Capulet" }] */
