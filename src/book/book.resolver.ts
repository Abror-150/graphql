import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book], { name: 'bookAll' })
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'bookOne' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book)
  createBook(@Args('name') name: string) {
    return this.bookService.create(name);
  }
}
