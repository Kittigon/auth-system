
import { Controller, Get, Request, Patch, Delete, Param , Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { checkRole } from 'src/common/check-role';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('profile')
  getProfile(@Request() req) {
    checkRole(req.user, ['admin', 'user']);
    return req.user;
  }

  @Get()
  findAll(@Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.remove(Number(id));
  }
}