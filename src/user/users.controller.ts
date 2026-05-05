
import { Controller, Get, Request, Patch, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { checkRole } from 'src/common/check-role';
import { ApiTags, ApiOperation , ApiBody , ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('profile')
  @ApiOperation({ summary: 'ดึงข้อมูลโปรไฟล์ผู้ใช้' })
  @ApiBearerAuth()
  getProfile(@Request() req) {
    checkRole(req.user, ['admin', 'user']);
    return req.user;
  }

  @Get()
  @ApiOperation({ summary: 'ดึงข้อมูล users ทั้งหมด' })
  @ApiBearerAuth()
  findAll(@Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ดึงข้อมูล user ตาม ID' })
  @ApiBearerAuth()
  findOne(@Param('id') id: string, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'อัปเดตข้อมูล user ตาม ID' })
  @ApiBody({ type: UpdateUserDTO })
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ลบ user ตาม ID' })
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Request() req) {
    checkRole(req.user, ['admin']);
    return this.userService.remove(Number(id));
  }
}