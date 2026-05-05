import { IsEmail, IsOptional, IsString } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class UpdateUserDTO{
    @IsString()
    @IsEmail()
    @IsOptional()
    email!: string;

    @IsString()
    @IsOptional()
    password!: string;

    @IsString()
    @IsOptional()
    role!: UserRole;
}
