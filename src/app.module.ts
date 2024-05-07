import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { PositionModule } from './position/position.module';
import { HierarchyModule } from './hierarchy/hierarchy.module';
import { ValidationFormModule } from './validation-form/validation-form.module';
import { ProfileModule } from './profile/profile.module';
import { PhotographModule } from './photograph/photograph.module';
import { HeadquarterModule } from './headquarter/headquarter.module';
import { MembershipModule } from './membership/membership.module';
import { MembershipOfferModule } from './membership-offer/membership-offer.module';
import { StatusValidationModule } from './status-validation/status-validation.module';

@Module({
  imports: [AuthModule, DefaultModule, UserModule, SeedModule, PositionModule, HierarchyModule, ValidationFormModule, ProfileModule, PhotographModule, HeadquarterModule, MembershipModule, MembershipOfferModule, StatusValidationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
