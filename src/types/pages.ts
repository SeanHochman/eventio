import { NextPage } from 'next';

import { NavLinkType } from '@common/types/common';

// TODO: types
export type EventioPage<T extends {}> = NextPage<T> & {
  Icons?: any;
  Blocks?: {
    Modal?: any;
    Sidebar?: any;
    CreateButton?: any;
    TopNavigation?: any;
    CornerContent?: any;
  };
};

export type CommonProps = {
  meta: { page: string; pageTitle: string };
  navLinks?: NavLinkType[];
};

export enum PageEnums {
  SIGNIN = 'signIn',
  SIGNUP = 'signUp',
  EVENTS = 'events',
  FUTURE = 'future',
  PAST = 'past',
  CREATE = 'create',
}

export enum PageTitleEnums {
  SIGNIN = 'Sign In',
  SIGNUP = 'Sign Up',
  EVENTS = 'Events',
  FUTUREEVENTS = 'Future Events',
  PASTEVENTS = 'Past Events',
  CREATE = 'Create Event',
}
