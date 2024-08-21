import {Entity, PrimaryGeneratedColumn ,Column} from 'typeorm'


@Entity ({name:'user'})
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({name: 'username', nullable:false})
    username:string

    @Column({ name: 'email', nullable: false, unique: true})
    email:string;

    @Column({name:'password', nullable: false })
    password:string;
}