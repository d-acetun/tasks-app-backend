import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  createTask(task: CreateTaskDto) {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  getAllTasks() {
    return this.taskRepository.find();
    //* seleccionar campos return this.taskRepository.find({ select: ['title'] }); 
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({
      where: { id },
      // select: ['title', 'done'],
    });
  }

  updateTask(id: number, newValues: UpdateTaskDto) {
    return this.taskRepository.update(id, newValues);
  }

  deleteTask(id: number) {
    return this.taskRepository.delete({
      id,
    });
  }
}
