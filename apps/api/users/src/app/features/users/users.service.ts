import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '@kwc/microservices';
import { verifyHash } from '../../utils/scrypt';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(data: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: data,
    });
  }

  async findByEmailAndMatchingPassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | null> {
    const credentials = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!credentials) {
      return null;
    }

    if (!(await verifyHash(password, credentials.password, process.env.AUTH_SALT_SECRET))) {
      return null;
    }

    return credentials;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
