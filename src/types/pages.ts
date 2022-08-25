import { NextPage } from 'next';

export type EventioPage<T extends {}> = NextPage<T>;

export type CommonProps = {
  meta: { page: string; pageTitle: string };
  hasSidebar?: boolean;
};

export enum PageEnums {
  SIGNIN = 'signIn',
  SIGNUP = 'signUp',
  EVENTS = 'events',
}

export enum PageTitleEnums {
  SIGNIN = 'Sign In',
  SIGNUP = 'Sign Up',
  EVENTS = 'Events',
}
