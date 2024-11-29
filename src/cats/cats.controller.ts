import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
import { createCatSchema } from './schema';

@Controller('cats')
export class CatsController {
  // injected
  // catsService 선언과 초기화
  constructor(private catsService: CatsService) {}

  // 이때 Postman으로 요청 보내면 age가 string이라서 에러 발생
  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
