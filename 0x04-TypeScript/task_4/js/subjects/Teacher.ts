export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingJava?: number;
    experienceTeachingReact?: number;
}

export const cTeacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };
