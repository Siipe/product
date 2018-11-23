export default {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            database: 'test',
            user: 'siipe',
            password: '123456',
            insecureAuth: true
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};