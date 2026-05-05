import { Module } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { AuthsController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule ,
    PassportModule,
    JwtModule.register({
      secret: 'mysecret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthsController],
  providers: [AuthsService , JwtStrategy],
})
export class AuthModule { }
