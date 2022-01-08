import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
  @Get('list')
  @ApiOperation({ summary: '用户列表' })
  list() {
    return '用户列表';
  }

  @Post('add')
  @ApiOperation({ summary: '新增用户' })
  add(@Body() userDto: UserDto) {
    console.log(userDto);
    return userDto;
  }

  @Put('edit')
  @ApiOperation({ summary: '修改用户' })
  edit() {
    return '修改用户';
  }

  @Get('detail')
  @ApiOperation({ summary: '用户详情' })
  detail() {
    return '用户详情';
  }

  @Delete('delete')
  @ApiOperation({ summary: '删除用户' })
  delete() {
    return '删除用户';
  }
}
