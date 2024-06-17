export function useNavLinks() {
  return readonly([
  { to: '/', label: 'Home' },
  { to: '/#services', label: 'Services' },
  { to: '/#recent-works', label: 'Works' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
])
}