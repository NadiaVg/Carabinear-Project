export interface AuthResponse {
    user: {
        id: number,
        name: string,
        email: string,
        password: string,
        CP: number,
        admin: boolean,
        expires_in: number
    }, 
    access_token: string,
}
