import { ConflictException } from '@nestjs/common';

export default class AlreadyAssignedTestCenterNameException extends ConflictException {
  constructor() {
    super({
      message: 'Requested test center name is already taken',
      name: AlreadyAssignedTestCenterNameException.name,
    });
    this.name = this.constructor.name;
  }
}
