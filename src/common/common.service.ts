import { PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {

  private readonly client: S3Client = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials: {
      accessKeyId: process.env.AWS_SECRET_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
  });

  async uploadFileS3(file: Express.Multer.File, userId: string, folder: string): Promise<PutObjectCommandOutput> {
    if (!file) {
      throw new BadRequestException(`The file that you have selected does not comply with the following formats: ${process.env.AWS_FORMAT_IMAGES}`);
    }

    const uploadParams: PutObjectCommandInput = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${userId}/${folder}_${userId}.jpg`,
      Body: file.buffer
    };

    const command = new PutObjectCommand(uploadParams);
    return await this.client.send(command);
  }
}