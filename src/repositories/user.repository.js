import pool from "../database/pg.pool.js";


async function Inserir(name, email, password) {
     let sql = `insert into users(name, email, password) values($1, $2, $3)
     returning id_user`; 
   
     const user = await pool.query(sql, [name, email, password]); 
     
     return user.rows[0];     
 }
 
 async function ListarByEmail(email) { 
     let sql = `select * from users where email = $1`; 
     try{
     const user = await pool.query(sql, [email]); 
     if (user.length == 0)
         return [];
     else
         return user.rows[0];
}catch(err){
     console.log(err);     
}
 }
 
 async function Profile(id_user) {
 
     let sql = `select id_user, name, email from users where id_user = $1`;
 
     const user = await pool.query(sql, [id_user]);
 
     return user.rows[0];
 }
 
 export default { Inserir, ListarByEmail, Profile }

