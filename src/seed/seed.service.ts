import { Injectable } from '@nestjs/common';
import { OccupationService } from '../occupation/occupation.service';
import { initialData } from './data/seed-data';
import { ValidationService } from '../validation/validation.service';
import { SubscriptionService } from 'src/subscription/subscription.service';
@Injectable()
export class SeedService {

  constructor(
    private readonly occupationService: OccupationService,
    private readonly validationService: ValidationService,
    private readonly subscriptionService: SubscriptionService
  ) { }


  async executeSeed(): Promise<string> {

    await this.insertPositions();
    await this.insertHierarchies();
    await this.insertHeadquarter();
    await this.insertPositionHierarchies();

    await this.insertValidationForms();
    await this.insertStatusValidation();

    await this.insertOffers();
    await this.insertMemberships();
    await this.insertMembershipOffers();

    return 'SEED executed';
  }

  // * Comienza carga de datos de UserOccupancy
  private async insertPositions() {
    const seedPositions = initialData.positions;

    const positions = [];

    seedPositions.forEach(position => {
      positions.push(this.occupationService.createPosition(position))
    });

    await Promise.all(positions);

    return true;
  }

  private async insertHierarchies() {
    const seedHierarchies = initialData.hierarchies;

    const hierarchies = [];

    seedHierarchies.forEach(hierarchy => {
      hierarchies.push(this.occupationService.createHierarchys(hierarchy))
    })
    await Promise.all(hierarchies);

    return true;
  }

  private async insertPositionHierarchies() {
    const { data: positionsDb } = await this.occupationService.findAllPositions();
    const { data: hierarchiesDb } = await this.occupationService.findAllHierarchys();

    const positions = Object.entries(positionsDb).map(([_, values]) => values);
    const hierarchies = Object.entries(hierarchiesDb).map(([_, values]) => values);

    let positionHierarhies = [];

      positions.map(({ id: positionId, name: positionName }) => {
        hierarchies.map(({ id: hierarchyId, name: hierarchyName }) => {
          if (positionName === 'Piloto') {
            if (hierarchyName === 'Cap.' || hierarchyName === 'P.O.') {
              positionHierarhies.push(this.occupationService.createPositionHierarchy({ positionId, hierarchyId }))
            }
          } 
          else {
            if (hierarchyName === 'ESB' || hierarchyName === 'SOB') {
              positionHierarhies.push(this.occupationService.createPositionHierarchy({ positionId, hierarchyId }))
            }
          }
        });
      });

    await Promise.all(positionHierarhies);

    return true
  }

  private async insertHeadquarter() {
    const seedHeadquarter = initialData.headquarters;

    let headquarters = [];

    seedHeadquarter.forEach(headquarter => {
      headquarters.push(this.occupationService.createHeadquarter(headquarter));
    });

    await Promise.all(headquarters);

    return true
  }
  
  // * Comienza carga de datos de UserValidation
  private async insertValidationForms() {
    const seedValidationForms = initialData.validationForm;

    const vForms = [];

    seedValidationForms.forEach(vForm => {
      vForms.push(this.validationService.createValidationForm(vForm))
    })

    await Promise.all(vForms)

    return true;
  }

  private async insertStatusValidation() {
    const seedStatusValidationForms = initialData.statusValidation;

    const sValidation = [];

    seedStatusValidationForms.forEach(status => {
      sValidation.push(this.validationService.createStatusValidation(status));
    })

    await Promise.all(sValidation)

    return true;
  }

  // * Comienza carga de datos de UserMemberships
  private async insertMemberships() {
    const seedMemberships = initialData.memberships;

    let memberships = [];

    seedMemberships.map(membership => {
      memberships.push(this.subscriptionService.createMembership(membership));
    })
    
    await Promise.all(memberships);

    return true;
  }

  private async insertOffers() {
    const seedMOffers = initialData.membershipOffer;

    const mOffers = [];

    seedMOffers.forEach(offer => {
      mOffers.push(this.subscriptionService.createOffer(offer))
    });

    await Promise.all(mOffers)

    return true;
  }

  private async insertMembershipOffers() {
    const { data: membershipsDb } = await this.subscriptionService.findAllMembership();
    const { data: offersDb } = await this.subscriptionService.findAllOffers();

    const memberships = Object.entries(membershipsDb).map(([_, values]) => values);
    const offers = Object.entries(offersDb).map(([_, values]) => values);

    let mOffers = [];
    
    memberships.map(membership => {
      offers.map(offer => {
        if(membership.level === "Diamante" && membership.type === "Anual" || membership.level === "Diamond" && membership.type === "Anual") {
          mOffers.push(this.subscriptionService.createMembershipOffer({ membershipId: membership.id, offerId: offer.id }));
        } else {
          mOffers.push(this.subscriptionService.createMembershipOffer({ membershipId: membership.id }));
        }
      })
    })

    await Promise.all(mOffers)

    return true;
  }
}
