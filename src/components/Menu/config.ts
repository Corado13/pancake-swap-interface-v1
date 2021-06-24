import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farmswap.exchange',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farmswap.exchange/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://farmswap.exchange/syrup',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://farmswap.exchange/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://farmswap.exchange/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://farmswap.exchange/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://farmswap.exchange/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://farmswap.exchange/profile',
  //     },
  //   ],
  // },
     {
       label: 'Info',
       icon: 'InfoIcon',
       items: [
         {
           label: 'Overview',
           href: 'https://pancakeswap.info',
         },
         {
           label: 'Tokens',
           href: 'https://pancakeswap.info/tokens',
         },
         {
           label: 'Pairs',
           href: 'https://pancakeswap.info/pairs',
         },
         {
           label: 'Accounts',
           href: 'https://pancakeswap.info/accounts',
         },
       ],
     },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://farmswap.exchange/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.farmswap.exchange',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.farmswap.exchange',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
