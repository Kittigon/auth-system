
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserRole } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //  REGISTER
  async register(email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);

    return this.userService.create({
      email,
      password: hashed,
      role: UserRole.USER,
    });
  }

  //  LOGIN
  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid password');

    const payload = { sub: user.id, email: user.email ,role: user.role};

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}