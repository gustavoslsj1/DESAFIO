import { Module } from '@nestjs/common';

import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryController } from './cloudinary.controller';

@Module({
  exports: [CloudinaryProvider,CloudinaryService],
  providers: [CloudinaryProvider,CloudinaryService],
  controllers: [CloudinaryController]
})
export class CloudinaryModule {}
