import { Controller, Post, Body } from '@nestjs/common';
import { TestCenterService } from './test-center.service';
import { CreateTestCenterDto } from './dto/create-test-center.dto';

@Controller('test-center')
export class TestCenterController {
  constructor(private readonly testCenterService: TestCenterService) {}

  @Post()
  updateOrInsert(@Body() createTestCenterDto: CreateTestCenterDto) {
    return this.testCenterService.updateOrInsert(createTestCenterDto);
  }
}
