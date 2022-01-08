import { ApiProperty } from '@nestjs/swagger';

export enum UserGender {
  male = 1,
  female = 2,
}

// 应用筛选数据传输对象
export class UserDto {
  @ApiProperty({ description: '名字' })
  readonly name: string;

  @ApiProperty({ description: '年龄' })
  readonly age: number;

  @ApiProperty({ description: '性别' })
  readonly gender: UserGender;
}
