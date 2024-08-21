import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1724221799880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

       
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

        await queryRunner.query(`
            CREATE TABLE "user" (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                username varchar(256) NOT NULL,
                email varchar(256) NOT NULL,
                password varchar(256) NOT NULL,
                CONSTRAINT user_pk_id PRIMARY KEY (id),
            
            )
        `);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

