import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO {
    @ApiProperty({ example: 'Test@gmail.com' })
    email !: string;

    @ApiProperty({ example: '123' })
    password !: string;
}