export interface NavItem {
  name: string;
  icon?: string;
  route?: string;
  subMenu?: NavItem[];
}

export const navItems: { section: string; items: NavItem[] }[] = [
  {
    section: 'Main',
    items: [
      { name: 'Home', icon: 'ph-bold ph-house-simple', route: '/' },
      // {
      //   name: 'Dashboard',
      //   icon: 'ph-bold ph-list',
      //   route: '/dashboard',
      //   subMenu: [
      //     { name: 'Overview', route: '/' },
      //     { name: 'Renewal', route: '/renewal' },
      //     { name: 'Bound Tracking', route: '/bound' },
      //     { name: 'Team', route: '/team' },
      //   ],
      // },
      {
        name: 'Information',
        icon: 'ph-bold ph-file-text',
        route: '/info',
        subMenu: [
          { name: 'Brokers', route: '/broker' },
          { name: 'Brokerages', route: '/brokercompanies' },
          { name: 'Insured', route: '/insured' },
          { name: 'Team', route: '/underwriters' },
          // { name: 'Account', route: '/account' },
        ],
      },
      {
        name: 'Workstation',
        icon: 'ph-bold ph-bag',
        route: '/workstation',
        subMenu: [
          { name: 'Submission', route: '/submission' },
          { name: 'Rating', route: '/rating' },
          { name: 'Quoting', route: '/quoting' },
          { name: 'Underwriting Notes', route: '/notes' },
        ],
      },
    ],
  },
  // {
  //   section: 'Settings',
  //   items: [
  //     { name: 'Settings', icon: 'ph-bold ph-gear', route: '/settings' },
  //   ],
  // },
  {
    section: 'Account',
    items: [
      { name: 'Help', icon: 'ph-bold ph-info', route: '/help' },
      { name: 'Logout', icon: 'ph-bold ph-sign-out', route: '/logout' },
    ],
  },
];














// export interface NavItem {
//   name: string;
//   icon?: string;
//   route?: string;
//   children?: NavItem[];
//   isActive?: boolean;
// }

// export const navItems: NavItem[] = [
//   {name: 'Home', icon: 'ph-house-simple', route: '/'},
//   { 
//     name: 'Dashboard', 
//     icon: 'ph-list', 
//     children: [
//       { name: 'Overview', route: '/' },
//       { name: 'Renewal', route: '/renewal' },
//       { name: 'Bound Tracking', route: '/bound' },
//       { name: 'Team', route: '/team' }
//     ] 
//   },
//   { 
//     name: 'Information', 
//     icon: 'ph-file-text', 
//     children: [
//       { name: 'Brokers', route: '/broker' }, 
//       { name: 'Brokerages', route: '/brokerage' },
//       { name: 'Insured', route: '/insured' },
//       { name: 'Account', route: '/account' },
//     ] 
//   },
//   { 
//     name: 'Workstation', 
//     icon: 'ph-bag', 
//     children: [
//       { name: 'Submission', route: '/submission' }, 
//       { name: 'Rating', route: '/rating' },
//       { name: 'Quoting', route: '/quoting' },
//       { name: 'Underwriting Notes', route: '/notes' },
//     ] 
//   },

// ];