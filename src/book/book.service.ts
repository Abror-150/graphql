import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.book.findMany();
  }
  async findOne(id: number) {
    return await this.prisma.book.findFirst({ where: { id } });
  }

  async create(name: string) {
    return await this.prisma.book.create({
      data: {
        name,
      },
    });
  }
}
