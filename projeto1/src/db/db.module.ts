import { Inject, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import{TypeOrmModule} from '@nestjs/typeorm'
@Module({
    imports:[TypeOrmModule.forRootAsync({
        useFactory: async(configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get<string>('DB_HOST'),
            port: +configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
            entities: [__dirname + '/**/*.entity{.js,.ts}'],
            synchronize: false
        }),
        inject:[ConfigService, ]
    })] // iniciando modulo de forma assycrona
})
export class DbModule {}
