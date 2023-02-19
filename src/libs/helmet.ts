import helmet from 'helmet';

export const hsts = helmet.hsts({
    maxAge: 31536000,
    preload: true,
});

export const referrer = helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin',
});
