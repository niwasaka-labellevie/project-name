import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { users } from 'src/db/schema';
import { drizzle } from "drizzle-orm/mysql2";
import { eq, sql } from 'drizzle-orm';

// データベース接続設定。いったんここに記載。
const db = drizzle({ connection:{ 
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mysql',
  database: process.env.DB_NAME || 'sampledb',
  port: Number(process.env.DB_PORT || 3306),
}});

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await db.insert(users).values(createUserDto);
  }

  async findAll() {
    // usersテーブルに投入されたデータを、とりあえず素の状態で返す。
    return await db.select().from(users);
  }

  async findOne(id: number) {
    // idを指定してデータ取得
    // https://orm.drizzle.team/docs/select#filters
    return await db.select().from(users).where(eq(users.id, id));

    // 一応SQLみたいな書き方もできる
    // return await db.select().from(users).where(sql`${users.id} = ${id}`);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await db
      .update(users)
      .set(updateUserDto)
      .where(eq(users.id, id));
  }

  async remove(id: number) {
    return await db.delete(users).where(eq(users.id, id));
  }
}
