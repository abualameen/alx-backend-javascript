export default function getStudentsByLocation(listObj, city) {
	let filtered = listObj.filter(stud => stud.location === city);
	
	return filtered;
}
