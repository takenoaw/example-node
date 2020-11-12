module.exports = {
    api: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
        rounds: parseInt(process.env.ROUNDS_BYCRYPT) || 8,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret'
    },
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: parseInt(process.env.MYSQL_SRV_PORT) || 3002
    }
}