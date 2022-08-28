export type TabType = {
  id: string;
  title: string;
  href: string;
};

export const eventFilterTabs: TabType[] = [
  {
    id: 'all',
    title: 'All Events',
    href: '/events',
  },
  {
    id: 'future',
    title: 'Future Events',
    href: '/events/future',
  },
  {
    id: 'past',
    title: 'Past Events',
    href: '/events/past',
  },
];

export type NavLinkType = { href: string; text: string; icon?: any };
