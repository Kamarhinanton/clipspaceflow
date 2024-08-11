import routes from '@/utils/routes'
export const headerNavigationLinks = [
  {
    href: routes.public.joinBeta,
    description: 'Join Beta',
    id: 1,
    desktop: true,
  },
  {
    href: routes.public.howItWorks,
    description: 'How it works',
    id: 2,
    desktop: true,
  },
  {
    href: routes.public.clipSpaceAI,
    description: 'Clipspace AI',
    id: 3,
    desktop: true,
  },
  {
    href: '/',
    description: 'Join as video creator',
    id: 4,
    desktop: false,
  },
  {
    href: '/',
    description: 'Hire video creators',
    id: 5,
    desktop: false,
  },
]
