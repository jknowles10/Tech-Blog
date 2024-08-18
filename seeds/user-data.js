const { User } = require('../models');

const userData = [
    {
        id:'01',
        name: 'Emanuel Lopez',
        email: 'elopez0009@example.com',
        username: 'emlop007',
        password: 'secure123'

    }, 
    {
        id:'02',
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'jdoe112',
        password: 'password123'
    }, 
    {
        id:'03',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        username: 'janes456',
        password: 'secret123'
    }, 
    {
        id:'04',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        username: 'ajohnson789',
        password: 'qwerty123'
    }, 
    {
        id:'05',
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        username: 'bbrown101',
        password: 'p@ssw0rd'
    }
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;