import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { cTeacher } from "./subjects/Teacher";

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
