import Link from "next/link"

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#community', label: 'Community' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#resources', label: 'Resources' },
]

// const mobileNavLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#features', label: 'Features' },
//   { href: '#community', label: 'Community' },
//   { href: '#roadmap', label: 'Roadmap' },
//   { href: '#pricing', label: 'Pricing' },
//   { href: '#resources', label: 'Resources' },
// ]

const NavLinks = () => {
  return (
    <nav className="grid md:flex items-center gap-2 md:gap-6 bg-[#0B101C] border-x-4 md:border-none border-[#f143a9]/20 rounded-md py-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm w-full font-medium text-[#FFFFFF] md:px-12 hover:scale-105 p-2 rounded-sm transition-colors blood-drip-animation"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks