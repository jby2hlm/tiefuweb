const mysql=require('mysql');
const pool=mysql.createPool({
    connectionLimit:1000,
    host:'localhost',
    user:'root',
    password:'',
    database:'tiefu'
});
function query(sql,arr,fn){
    pool.getConnection((err,con)=>{
        con.query(sql,arr,(err,res)=>{
            con.release();
            fn(err,res);
        })
    })
}
module.exports={
    query:query
};