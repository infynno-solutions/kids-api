import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { GameModule } from './game/game.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, ContentModule, GameModule, QuestionModule, AnswerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
