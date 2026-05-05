
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { ApiTags , ApiOperation} from '@nestjs/swagger';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'ลงทะเบียนผู้ใช้ใหม่' })
  register(@Body() body: RegisterDTO) {
    return this.authService.register(body.email, body.password);
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'เข้าสู่ระบบ' })
  login(@Body() body: LoginDTO) {
    return this.authService.login(body.email, body.password);
  }
}