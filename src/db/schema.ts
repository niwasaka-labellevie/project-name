import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

// テーブル定義（型と構造の定義。実際にテーブルを作るわけではない） 
// ※init-users.sqlに記載したcreate table文のテーブル構造に合わせる
export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 32 }),
  email: varchar('email', { length: 32 }),
});

// 今は１個のファイルの中に定義しちゃってるけど、テーブルごとにtsファイルを分けることもできるぽい
// Prismaでも非公式の方法で出来るぽい？・・けど、schema.prismaという1つのファイルに全部まとめるのが基本

// Drizzleは分割管理を公式でサポートしているから、ぱっと見でわかりやすい、管理しやすいって感じ
// https://orm.drizzle.team/docs/sql-schema-declaration