import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number) {
    const task = await this.tasksService.getTaskById(id);
    if (!task) {
      return new HttpException('Task does not exist', HttpStatus.NOT_FOUND);
    }

    return task;
  }

  @Patch(':id')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() newValues: UpdateTaskDto,
  ) {
    const task = await this.tasksService.getTaskById(id);
    if (!task) {
      return new HttpException('Task does not exist', HttpStatus.NOT_FOUND);
    }

    return this.tasksService.updateTask(id, newValues);
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number) {
    const task = await this.tasksService.getTaskById(id);
    if (!task) {
      return new HttpException('Task does not exist', HttpStatus.NOT_FOUND);
    }

    return this.tasksService.deleteTask(id);
  }
}
