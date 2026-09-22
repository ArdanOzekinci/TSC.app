import { AcademicProfile } from "./academicprofile";

export interface UserIdentity {
    id: number;
    name: string;
    email: string;
    city: string;
}

export interface UserCultural {
    memleket: string;
    years_in_country: number | null;
    background: string;
    interests: string[];
    bio: string;
}

export interface UserMetadata{
    created_at: Date;
    updated_at: Date;
    last_active_at: Date;
    preferred_language: string;
    auth_provider: string;
}

export interface User {
    Identity: UserIdentity;
    Academic: AcademicProfile;
    Cultural: UserCultural;
    Metadata: UserMetadata;
}

const identity: UserIdentity = {
    id: 1,
    name: "Ardan",
    email: "uydur@gmail.com",
    city: "Oakville",
};

const defaultUser: User = {
    Identity: identity,
    Academic: {
        user_id: identity.id,
        user_student_id: 1330597,
        university: "Guelph",
        year_of_study: 2,
        program: "Engineering Systems And Computing",

        courses: [
            {
                code: "CIS*1500",
                term: "Fall 2026"
            }
        ],
        study_style_preference: "either",
        goal: "weekly group"
    },
    Cultural: {
        memleket: "Antalya",
        background: "Canadian Born",
        years_in_country: null,
        interests: ["Football", "Satranç", "Billardo"],
        bio: "An Absolute G"

    },
    Metadata: {
        created_at: new Date("2026-07-08"),
        updated_at: new Date("2026-07-08"),
        last_active_at: new Date("2026-07-08"),
        preferred_language: "English",
        auth_provider: "Google"
    },
}



/*

Contact/social presence: instagram_handle, whatsapp_number — useful since you decided contact reveal happens on connection acceptance, this is where that data lives
Preferences: preferred_language , notification_preferences (future — email vs in-app)
Verification/trust (matters a lot for a community app): is_verified (e.g. confirmed via .ca university email), verification_method

 */
