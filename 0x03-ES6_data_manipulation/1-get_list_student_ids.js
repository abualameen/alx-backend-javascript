export default function getListStudentIds(listObj) {
  let result = [];

  if (Array.isArray(listObj)) {
    result = listObj.map((stud) => stud.id);
  }

  return result;
}
