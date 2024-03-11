export default function getStudentIdsSum(listObj) {
  const reduced = listObj.reduce((accumulator, listObj) => accumulator + listObj.id, 0);
  return reduced;
}
