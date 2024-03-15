import { Subjects } from "./Subject";

export namespace Subjects {
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for C++";
        }

        getAvailableTeacher(): string {
            return this.teacher && this.teacher.experienceTeachingC ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
        }
    }
}

