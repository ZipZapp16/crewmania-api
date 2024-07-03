import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload } from "../interfaces";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly prismaService: PrismaService,
        private readonly configService: ConfigService
    ) {
        super({
            secretOrKey: configService.get('JWT_SEED'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    async validateJwt(jwtPayload: JwtPayload): Promise<User> {
        const { email } = jwtPayload;

        const user = await this.prismaService.user.findUnique({ where: { email }});

        if(!user) {
            throw new UnauthorizedException(`The token from the user with email ${email} is not valid.`);
        }

        if(!user.enabled) {
            throw new UnauthorizedException(`The account of the user with email ${email} is not active yet, talk with an admin.`);
        }

        return user;
    }
}