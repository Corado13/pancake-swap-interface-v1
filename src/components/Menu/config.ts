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
  //       {
  //         label: 'Overview',
  //         href: 'https://pancakeswap.info',
  //       },
  //       {
  //         label: 'Tokens',
  //         href: 'https://pancakeswap.info/tokens',
  //       },
         {
           label: 'Pairs',
           href: 'https://pancakeswap.info/pairs/0xd462D9eBDB6b938C8a5d96785d3DD0C8596731f2',
         },
  //       {
  //         label: 'Accounts',
  //         href: 'https://pancakeswap.info/accounts',
  //       },
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
export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/farmswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/FarmSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/FarmSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/FarmSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/farmswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/farmswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/farmswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/FarmSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/FarmswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/farmswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/farmswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/FarmSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/FarmSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/farmswap",
  },
];
export default config
