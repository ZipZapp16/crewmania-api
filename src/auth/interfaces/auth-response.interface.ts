import { DataResponse } from "src/common/interfaces";

export interface AuthData {
    id: string;
    name: string;
    lastname: string;
    secondLastname: string;
    email: string;
    dateAdmission: Date;
    phone: string;
    profilePicture: string;
    loginOption: string;
    firebaseToken: string;
    createdAt: Date;
    updatedAt: Date;
    token?: string;
    role: string;
}

export interface AuthResponse extends DataResponse {
    data: AuthData | AuthData[]
}