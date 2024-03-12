import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import CreateTaskDto from './dtos/create-task';
import { Response } from 'express';

@Controller('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) { }

  @Post()
  async create(@Body() data: CreateTaskDto, @Res() res: Response) {
    const task = await this.todolistService.createTask(data);
    res.status(HttpStatus.CREATED).json(task);
  }

  @Get()
  async getTaks(@Res() res: Response) {
    const tasks = await this.todolistService.findAllTasks();
    res.status(HttpStatus.OK).json(tasks);
  }

}
