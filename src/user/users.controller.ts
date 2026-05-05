
import { Controller, Get, UseGuards, Request, Patch, Delete, Param , Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { checkRole } from 'src/common/check-role';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    checkRole(req.user, ['admin', 'user']);
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.findOne(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.update(Number(id), updateUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.remove(Number(id));
  }
}