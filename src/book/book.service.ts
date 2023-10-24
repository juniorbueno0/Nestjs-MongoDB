import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel:Model<Book>){}

    findAll(){
        return this.bookModel.find();
    }

    async create(book: any){
        const newBook = await this.bookModel.create(book);
        return newBook.save();
    }

    delete(idd: string){
        // console.log(idd);
        return this.bookModel.findByIdAndDelete(idd);
    }
    
}