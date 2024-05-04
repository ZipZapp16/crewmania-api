import { Usuario } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface User extends DataResponse {
    data: Usuario;
}

export interface Users extends DataResponse {
    data: Usuario[];
}