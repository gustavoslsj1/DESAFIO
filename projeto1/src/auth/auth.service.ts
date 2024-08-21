// import { UsersService } from './../users/users.service';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt'
// import { AuthResponseDto } from './auth.Dto';
// import { compareSync as bcryptCompareSync } from 'bcrypt';
// @Injectable()
// export class AuthService {
   

//     constructor(private readonly usersService: UsersService,
//         private readonly jwtService: JwtService) {}

//     singIn(username: string, passowrd: string): AuthResponseDto {
//         const foundUser = this.usersService.findByUserName(username);

//         if (!foundUser || !bcryptCompareSync(passowrd, foundUser.password)) {
//             throw new UnauthorizedException();
//         }

//         const payload = { sub: foundUser.id, username: foundUser.username };

//         const token = this.jwtService.sign(payload);

//         return { token }
//     }
// }
