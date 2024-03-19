import { Injectable } from '@nestjs/common';
import { Message } from '@shop-mart/api-interfaces';
import { sequelize } from '../../database/db';
import { QueryTypes } from 'sequelize';

@Injectable()
export class LoginService {

 async addUser(body:any) {
    const result=await sequelize.query('INSERT INTO users (UserName, Password, ContactNumber, email) VALUES ($1, $2, $3, $4)',{
      type:QueryTypes.INSERT,
      bind:[
        body.username,
        body.password,
        body.contact,
        body.email
      ]
    });
    return result;
  }
}
