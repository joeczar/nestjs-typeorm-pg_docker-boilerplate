import { User } from '../../users/user.entity';

const mockedUser: User = {
  id: 1,
  email: 'user@email.com',
  name: 'John',
  password: 'hash',
  createdAt: new Date(),
  hashPassword: async function() {
    console.log('hashed');
  },
};

export default mockedUser;
