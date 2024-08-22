import { CloudinaryService } from './cloudinary.service';
import { Controller, UseInterceptors, Post, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cloudinary')
export class CloudinaryController {
    constructor(
        private readonly cloudinaryService: CloudinaryService    ) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
                    new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
                ]
            }),
        ) file: Express.Multer.File) {
        return this.cloudinaryService.uploadFile(file)
    }
}
