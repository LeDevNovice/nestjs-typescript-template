import { Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch() {}
}
