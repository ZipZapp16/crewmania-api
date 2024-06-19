import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  create() {
    return 'This action adds a new common';
  }
}
