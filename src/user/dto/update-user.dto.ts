import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { UserRole } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDTO{
    @IsString()
    @IsEmail()
    @IsOptional()
    @ApiProperty({ example: 'Test@gmail.com' })
    email!: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ example: '123' })
    password!: string;

    @IsEnum(UserRole)
    @IsOptional()
    @ApiProperty({ example: 'user' })
    role!: UserRole;
}
