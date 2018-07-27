import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>

    <style jsx>{`
      p {
        color: red;
      }
      a {
      	color: green;
      	margin-right: 15px;
      }
    `}</style>
    </div>
)

export default Header