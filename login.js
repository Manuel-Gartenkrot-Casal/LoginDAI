import jwt from 'jsonwebtoken';

const secretKey    = 'ClaveSecreta2000$';
let   token        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdW1pby...';
let   payloadOriginal = null;

try {

    payloadOriginal = await jwt.verify(token, secretKey);

} catch (e) {
    // .- TokenExpiredError
    // .- JsonWebTokenError (invalido, mal formado, error de firma, etc.)
    // .- NotBeforeError
    console.error(e);
}

console.log(payloadOriginal);