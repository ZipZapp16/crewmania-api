export interface JwtPayload {
    id: number;
    fullname: string;
    email: string;
    iat?: number;
    exp?: number;
}