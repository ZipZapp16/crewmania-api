export interface JwtPayload {
    id: string;
    fullname: string;
    email: string;
    iat?: number;
    exp?: number;
}