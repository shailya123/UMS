import { Injectable } from '@nestjs/common';
import { sequelize } from '../../database/db';

@Injectable()
export class UserService {
  async findOne(username: string,password:string) {
    const result=await sequelize.query('select * from users where UserName=$1 and Password=$2',{
      bind:[
        username,
        password
      ]
    });
    return result;
  }
}
