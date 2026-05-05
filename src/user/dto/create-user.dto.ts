import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDTO {
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    password!: string;

    @IsString()
    role!: UserRole;
}
