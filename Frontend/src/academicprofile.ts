export type StudyStylePreference = "in-person" | "online" | "either";
export type AcademicGoal = "exam prep" | "weekly group" | "homework help";

export interface CourseEnrollment {
    code: string;
    term: string;
}

export interface AcademicProfile {
    user_id: number;
    user_student_id: number;
    university: string;
    year_of_study: number;
    program: string;
    courses: CourseEnrollment[];
    study_style_preference: StudyStylePreference;
    goal: AcademicGoal;
}
