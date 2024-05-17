import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@test.com',
        password: 'password',
      },
    });

    return user;
  }
}
