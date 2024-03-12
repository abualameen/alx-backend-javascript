export default function getStudentsByLocation(listObj, city) {
  const filtered = listObj.filter((stud) => stud.location === city);

  return filtered;
}
