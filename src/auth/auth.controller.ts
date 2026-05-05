
import { Controller, Post, Body } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthsController {
  constructor(private readonly authService: AuthsService) {}

  @Public()
  @Post('register')
  register(@Body() body: any) {
    return this.authService.register(body.email, body.password);
  }

  @Public()
  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }
}