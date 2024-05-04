import { Injectable } from '@nestjs/common';

export interface defaultMessage {
    message: string;
}

@Injectable()
export class DefaultService {
    getCrewmaniaStart(): defaultMessage[] {
        return [{ message: "Crewmania API v1.0" }];
    }
}
