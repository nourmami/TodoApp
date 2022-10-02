import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModuleModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
