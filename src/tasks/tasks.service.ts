import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  createTask(task: CreateTaskDto) {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  getAllTasks() {
    return this.dataSource.query('SELECT * FROM tasks');
  }

  async getTaskById(id: number): Promise<Task | null> {
    const tasks = await this.dataSource.query(
      `SELECT * FROM tasks WHERE id = ${id}`,
    );
    return tasks[0] || null;
  }

  updateTask(id: number, newValues: UpdateTaskDto) {
    const { title, description, done } = newValues;
    return this.dataSource.query(
      `UPDATE tasks SET title = '${title}', description = '${description}', done = ${done} WHERE id = ${id}`,
    );
  }

  deleteTask(id: number) {
    return this.dataSource.query(`DELETE FROM tasks WHERE id = ${id}`);
  }
}
