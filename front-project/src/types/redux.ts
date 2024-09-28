export interface AuthType {
    status: "checking" | "not-authenticated" | "authenticated"
    user: UserType | null
    errorMessage: string | null
}

export interface UserType {
    id: string
    name: string
    email: string
}