import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {;
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    password!: string;

    @IsString()
    role!: UserRole;
}
