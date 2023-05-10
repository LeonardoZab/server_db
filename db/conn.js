const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('bd_dados', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',  
})

sequelize.authenticate().then(()=>{
    console.log('conexão realizada com sucesso')
}).catch((err)=>{
    console.log('erro de conexão')
})

module.exports = sequelize