type MaterialIconName = 'home' | 'lists' | 'case' | 'text_fields' | 'widgets' | 'build' | 'view_day' | 'navigation'; 

interface NavItem {
  name: string;
  icon: MaterialIconName;
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
      { name: 'Bound Tracking', route: '/typography' },
      { name: 'Stats', route: '/typography' }
    ] 
  },
  { 
    name: 'INFORMATION', 
    icon: 'lists', 
    route: '/' 
    children: [
      { name: 'Brokers', route: '/base' }, 
      { name: 'Brokerages', route: '/accordion' },
      { name: 'Insured', route: '/breadcrumb' },
      { name: 'Policies', route: '/breadcrumb' },
    ] 
  }
];