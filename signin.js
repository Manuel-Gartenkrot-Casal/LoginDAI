import jwt from 'jsonwebtoken';

const payload = {
    id: 123,
    username: 'willywonka'
};

const secretKey = 'ClaveSecreta2000$';

const options = {
    expiresIn: '1h',
    issuer: 'mi_organizacion'
};

const token = jwt.sign(payload, secretKey, options);
console.log(token);