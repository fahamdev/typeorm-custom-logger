import { Injectable } from '@nestjs/common';
import { CreateTestCenterDto } from './dto/create-test-center.dto';
import { TestCenter } from './entities/test-center.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import RepositoryExceptionHandler from './exception-handlers/repository-exception-handler';

@Injectable()
export class TestCenterService {
  constructor(
    @InjectRepository(TestCenter)
    private testCenterRepository: Repository<TestCenter>,
  ) {}

  async updateOrInsert(createTestCenterDto: CreateTestCenterDto) {
    const testCenter = this.testCenterRepository.create(createTestCenterDto);
    try {
      return await this.testCenterRepository.save(testCenter);
    } catch (error) {
      RepositoryExceptionHandler.handleTestCenterError(error);
      throw error;
    }
  }
}
