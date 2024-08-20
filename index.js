export default function flubbersort(array) {
	if (array.length <= 1) return array;

	for (const i of array.keys()) {
		const target = array.length - i - 1;

		for (let j = 0; j < target; j++) {
			if (array[j] > array[target]) [array[j], array[target]] = [array[target], array[j]];
		}
	}

	return array;
}

if (process.argv[2] === "test") {
	console.log(flubbersort([9, 1, 2, 7, 5, 3, 0, 4, 6, 8]));
}
