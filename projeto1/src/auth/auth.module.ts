// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { JwtModule } from '@nestjs/jwt'
// import { ConfigService } from '@nestjs/config'
// import { UsersModule } from 'src/users/users.module';
// @Module({
//   imports: [JwtModule.registerAsync({
//     global: true,
//     imports: [],
//     useFactory: async (configService: ConfigService) => ({
//       secret: configService.get<string>('JWT_SECRET')}),
//     inject: [ConfigService],
//   }),UsersModule], // registro dinamico
//   controllers: [AuthController],
//   providers: [AuthService]
// })
// export class AuthModule { }
