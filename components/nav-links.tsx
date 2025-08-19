import Link from "next/link"

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#community', label: 'Community' }
]

// const mobileNavLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#products', label: 'Products' },
//   { href: '#community', label: 'Community' },
//   { href: '#roadmap', label: 'Roadmap' },
//   { href: '#pricing', label: 'Pricing' },
//   { href: '#resources', label: 'Resources' },
// ]

const NavLinks = () => {
  return (
    <nav className="grid md:flex items-center gap-2 md:gap-4 bg-background border-x-4 md:border-none border-muted/20 rounded-md py-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm w-full font-medium text-text md:px-8 hover:scale-105 p-2 rounded-sm transition-colors blood-drip-animation"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks