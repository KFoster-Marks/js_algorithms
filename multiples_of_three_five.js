function addMultiples () {
	var sum = null;
	for (num = 0; num < 1000; num++) {
		if ((num % 3 === 0) || (num % 5 === 0)) {
			//console.log(num);
			sum +=num;
		}
	}
	return sum;
}
addMultiples();
