import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 
export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
  }));
   const config = new DocumentBuilder()
  .setTitle('swagger UI')
  .setDescription('swagger api for creating user')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)

  await app.listen(4000);
  console.log("server running..")
}
bootstrap();
