import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @IsEmail()
    @ApiProperty({ example: 'Test@gmail.com' })
    email!: string;

    @IsNotEmpty()
    @ApiProperty({ example: '123' })
    password!: string;

    @IsEnum(UserRole)
    @ApiProperty({ example: 'user' })
    role!: UserRole;
}
