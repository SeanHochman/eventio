import { UserType } from '@common/types/user';
import { sliceFirstLetter } from '@common/utils/common';
import { APIUserType } from '@types';

export const parseUser = (user: APIUserType): UserType => ({
  id: user.id,
  name: `${user.firstName} ${user.lastName}`,
  initials: `${sliceFirstLetter(user.firstName)}${sliceFirstLetter(
    user.lastName
  )}`.toUpperCase(),
  email: user.email,
});
