import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeorm } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeorm), TasksModule],
})
export class AppModule {}
