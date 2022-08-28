export type FilterOptsType = {
  filterFuture?: boolean;
  filterPast?: boolean;
};

export type APIUserType = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

export type APIEventType = {
  attendees: APIUserType[];
  id: string;
  createdAt: string;
  capacity: number;
  description: string;
  owner: APIUserType;
  startsAt: string;
  title: string;
};
