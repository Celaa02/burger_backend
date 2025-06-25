import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BurgerModule } from './burger/burger.module';
import { OrderModule } from './order/order.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:
        process.env.DB_HOST ||
        'burguer-station.cr88uuesukl4.us-east-1.rds.amazonaws.com',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'darly',
      password: process.env.DB_PASS || 'burguer-station',
      database: process.env.DB_NAME || 'burguer_station',
      autoLoadEntities: true,
      synchronize: true, // cambia a false en producción
    }),
    AuthModule,
    UserModule,
    BurgerModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
