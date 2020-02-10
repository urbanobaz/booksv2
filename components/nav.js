import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://www.urbanobaz.com', label: 'Personal Site' },
  { href: 'https://github.com/urbanobaz', label: 'GitHub' },
  { href: 'https://twitter.com/ubaz_3', label: 'Twitter' }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a><b>Books&More</b></a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
