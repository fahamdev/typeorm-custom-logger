import { Module } from '@nestjs/common';
import { TestCenterService } from './test-center.service';
import { TestCenterController } from './test-center.controller';
import { TestCenter } from './entities/test-center.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TestCenter])],
  controllers: [TestCenterController],
  providers: [TestCenterService],
})
export class TestCenterModule {}
