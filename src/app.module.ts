import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestCenterModule } from './test-center/test-center.module';
import { TestCenter } from './test-center/entities/test-center.entity';
import { MyCustomLogger } from './custom-logger/my-custom-logger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'testDB',
      entities: [TestCenter],
      synchronize: true,
      logger: new MyCustomLogger(true),
    }),
    TestCenterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
