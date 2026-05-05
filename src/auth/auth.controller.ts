
import { Controller, Post, Body } from '@nestjs/common';
import { AuthsService } from './auth.service';

@Controller('auth')
export class AuthsController {
  constructor(private readonly authService: AuthsService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }
}