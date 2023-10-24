import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot('mongodb+srv://turtle:turtle123@wave.7zt2p5t.mongodb.net/api')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}