import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('todos')
export class BookController {
    constructor(private readonly bookService: BookService){}

    @Get()
    async findAllBooks(){
        return this.bookService.findAll();
    }

    @Post()
    createBooks(@Body() book: any){
        return this.bookService.create(book);
    }
    
    @Delete(':id')
    deleteBook(@Param('id') id: string) {
    //   return `This action removes a #${id} cat`;
        return this.bookService.delete(id);
    }
}