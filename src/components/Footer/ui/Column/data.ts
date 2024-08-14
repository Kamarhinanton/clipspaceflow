import routes from '@/utils/routes'

export const teamLinks = [
  {
    href: 'mailto:hello@clipspace.co',
    title: 'Contact',
    id: 1,
    targetBlank: true,
  },
  {
    href: 'https://calendly.com/clipspace/30min',
    title: 'Book a meeting with CEO',
    id: 2,
    targetBlank: true,
  },
]

export const legalLinks = [
  {
    href: routes.public.privacy,
    title: 'Privacy Policy',
    id: 1,
  },
  {
    href: routes.public.cookies,
    title: 'Cookie Policy',
    id: 2,
  },
  {
    href: routes.public.terms,
    title: 'Terms of Service',
    id: 3,
  },
]
