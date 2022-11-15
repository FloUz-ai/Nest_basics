import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: any) {
    return this.messagesService.create(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    const message = this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException();
    }
    return message;
  }
}
