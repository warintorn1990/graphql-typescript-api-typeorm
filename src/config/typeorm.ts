
import {createConnection} from 'typeorm'
import path from 'path'

export async function connect() {
  await createConnection({
    type:"mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "graphqlts",
    entities: [
      path.join(__dirname, '../entity/**/**.ts'),
      path.join(__dirname, '../entity/**/**.js')
    ],
    synchronize: true
  });
  console.log('Database is Connected')
}
