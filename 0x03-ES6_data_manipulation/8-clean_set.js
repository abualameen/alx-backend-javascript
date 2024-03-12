export default function cleanSet(set, startString) {
	const output = [];
 	if (startString === '') {
		return '';
	}

	for (const things of set) {
		if (things.startsWith(startString)) {
			output.push(things.slice(startString.length));
		}
	}

	return output.join('-');
}
