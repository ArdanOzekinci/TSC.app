Turkish Student Network (Prototype 1)

A full-stack community app for Turkish students in Canada, focused on two connection types:

Arkadaşlık — social/friend-finding by city, university, interests, and memleket (hometown region in Turkey)
Akademik — study-partner matching by course code and term
Status

Prototype in early development. The full request/response chain is confirmed working end-to-end: Vite → React → Supabase client → Postgres, with a live SELECT query returning real data from the users table.

Not yet built: insert flow from the UI (rows currently added manually via the Supabase Table Editor), generated TypeScript types from the live schema, academic_profiles/connections read-write, and authentication.

Tech Stack
Frontend: React + TypeScript, built with Vite
Backend/DB: Supabase (hosted Postgres, auth, auto-generated REST API)
Planned: FastAPI (Python) for custom backend logic beyond what Supabase's client covers directly

Stack chosen deliberately for career relevance (React/TS + Python backend is a common industry pairing) over single-language alternatives, while keeping matching/business logic in Python where the developer is strongest.

Data Model

Three core entities:

users — identity and profile: id, email, name, university, program, city, memleket, background (international_student / immigrant / turkish_canadian / other), years_in_country, interests, bio
academic_profiles — one-to-one with users; holds course enrollments (with term tagging), study style preference, and goal
connections — polymorphic link between two users; type is "friend" or "study", with course_code populated only for study connections; status is pending / accepted / declined

Relationships are enforced via Postgres foreign keys (academic_profiles.user_id, connections.requester_id, connections.recipient_id → users.id), with Row Level Security enabled and locked down by default — tables must be explicitly exposed and policies written before they're reachable via the API.

Explicitly Out of Scope (Prototype 1)

Events, housing/roommate matching, in-app chat, and mentorship-as-guidance (superseded by academic connection matching). Content translation for user-generated posts is also deferred — UI text is localized (Turkish, English, French) via i18n, but user content stays in whatever language it was written, relying on built-in browser translation for anyone who wants it.

Project Structure
ts-app/
└── Frontend/
    ├── index.html
    ├── package.json
    └── src/
        ├── main.tsx          # mounts <App /> into #root
        ├── App.tsx
        ├── supabaseClient.ts # Supabase client init
        ├── User.ts
        ├── academicprofile.ts
        └── Connection.ts
Next Steps
Generate TypeScript types from the live Supabase schema and wire them into createClient<Database>(...) so data is type-checked against real tables instead of any
Build a real insert form (name/email inputs, useState, submit calls supabase.from('users').insert(...)) to replace manual row entry
Repeat the read/write proof for academic_profiles and connections, exercising the foreign key relationships for the first time
Add Supabase Auth so RLS policies can move from wide-open testing rules to real per-user restrictions
