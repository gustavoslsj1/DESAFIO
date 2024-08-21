import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';
import {v4 as uuid} from 'uuid'
import { hashSync as bcryptHashSync } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { UserEntity } from 'src/db/entities/user.entity';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ){}

    async findAllUsers(): Promise<UserEntity[]>{
    const users = await this.usersRepository.find();
        if(users.length === 0) throw new HttpException('User not found!', HttpStatus.NOT_FOUND)
    return users;
    }

    async createUser(userDto:UserDto): Promise<UserDto> {
        const createUser = this.usersRepository.create({
            id: uuid(), // Gerando o ID manualmente
            username: userDto.username,
            email: userDto.email,
            password: userDto.password, // ou password_hash
        });
    
        return this.usersRepository.save(createUser);
}
}

 // private readonly  users: userDto[] = []
 

    // create(newUser: userDto){
    //     newUser.id =  uuid()
    //     newUser.password = bcryptHashSync(newUser.password, 10)
    //     this.users.push(newUser)
      
    // }

    // findByUserName ( username: string) : userDto | null{
    //     return this.users.find(user =>user.username === username )