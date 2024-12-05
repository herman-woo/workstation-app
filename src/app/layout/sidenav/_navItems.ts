type MaterialIconName = 'home' | 'lists' | 'case' | 'text_fields' | 'widgets' | 'build' | 'view_day' | 'navigation'; 

interface NavItem {
  name: string;
  icon?: MaterialIconName;
  route?: string;
  children?: NavItem[];
  isActive?: boolean;
}

export const navItems: NavItem[] = [
  { name: 'Home', icon: 'home', route: '/' },
  { 
    name: 'HOME', 
    icon: 'home', 
    route: '/' ,
    children: [
      { name: 'Overview', route: '/' },
      { name: 'Renewal', route: '/renewal' },
      { name: 'Bound Tracking', route: '/bound' },
      { name: 'Team', route: '/team' }
    ] 
  },
  { 
    name: 'INFORMATION', 
    icon: 'lists', 
    route: '/information' ,
    children: [
      { name: 'Brokers', route: '/broker' }, 
      { name: 'Brokerages', route: '/brokerage' },
      { name: 'Insured', route: '/insured' },
      { name: 'Account', route: '/account' },
    ] 
  },
  { 
    name: 'WORKSTATION', 
    icon: 'case', 
    route: '/workstation' ,
    children: [
      { name: 'Submission', route: '/submission' }, 
      { name: 'Rating', route: '/rating' },
      { name: 'Quoting', route: '/quoting' },
      { name: 'Underwriting Notes', route: '/notes' },
    ] 
  },

];