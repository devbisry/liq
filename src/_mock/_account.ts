// config
import { HOST_API } from '../../config';

// ----------------------------------------------------------------------

export const JWT_SECRET = 'minimal-secret-key';

export const JWT_EXPIRES_IN = '3 days';

export const users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Bisrat Kebere',
    email: 'dev@bisrat.tech',
    password: 'demo1234',
    photoURL: `${HOST_API}/assets/images/avatar_default.jpg`,
    phoneNumber: '+251 925698349',
    country: 'Ethiopia',
    address: 'AASTU',
    state: 'Addis Ababa',
    city: 'Addis Ababa',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'user',
    isPublic: true,
  },
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-1',
    displayName: 'Admin',
    email: 'admin@bisrat.tech',
    password: 'admin1234',
    photoURL: `${HOST_API}/assets/images/avatar_default.jpg`,
    phoneNumber: '+40 777666555',
    country: 'Ethiopia',
    address: '90210 Broadway Blvd',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  }
];
