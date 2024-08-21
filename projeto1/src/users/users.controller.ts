import { Body, Controller, Post, Res, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';
import { Response } from 'express';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    async findAllUsers(@Res() response: Response) {
        const users = await this.usersService.findAllUsers(); // Aguarda a Promise
        return response.status(200).json(users); // Retorna a resposta
    }


    @Post()
    async create(@Body() userDto: UserDto) {
        return this.usersService.createUser(userDto);
    }

}
