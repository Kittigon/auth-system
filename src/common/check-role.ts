import { ForbiddenException } from '@nestjs/common';

export function checkRole(user: any, roles: string[]) {
    if (!roles.includes(user.role)) {
        throw new ForbiddenException('Access denied');
    }
}