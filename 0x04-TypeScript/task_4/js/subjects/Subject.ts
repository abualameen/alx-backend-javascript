export interface Teacher {
    firstName: string;
    lastName: string;
}

export namespace Subjects {
    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
