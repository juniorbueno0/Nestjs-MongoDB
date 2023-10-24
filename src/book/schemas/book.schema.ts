import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    collection:'todos',
    timestamps:true
})
export class Book {
    @Prop({required:true, trim:true})
    title:string;
    @Prop({required:true, trim:true})
    description:string;
    @Prop({required:true, trim:true})
    status:string;
}

export const BookSchema = SchemaFactory.createForClass(Book);