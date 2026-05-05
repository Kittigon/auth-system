import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
    @ApiProperty({ example: 'Test@gmail.com' })
    email !: string;

    @ApiProperty({ example: '123' })
    password !: string;
}