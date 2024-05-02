import { Controller, Get, Post,Req,Res,Body } from '@nestjs/common';
import { response } from 'express';
@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request, @Res() res: Response): object  {
      return [1,2,3,4,5,6];
    }
    @Post('breed')
    giveAll(@Req() request: Request):string {
        console.log(request.body);
        return "kje";
        
    }
}
