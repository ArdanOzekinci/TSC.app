type Connection =
    |{Type: "friend", Requester: string,Recipient: string,Status: "accepted" | "pending" |"declined", CreatedAt: Date, }
    |{Type: "study", Requester: string,Recipient: string,Status: "accepted" |"pending" |"declined", CourseCode: string, CreatedAt: Date };

export function describeConnection(conn: Connection): string {
    if (conn.Type === "friend") {
        return `Friend request from ${conn.Requester}`;}

    else {
        return `Study request from ${conn.Requester}`;}
}

export type { Connection };
