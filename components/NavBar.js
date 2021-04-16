import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <h1>Next + Drupal 9: Fully Dynamic...?</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/companies"><a>Companies</a></Link>
      <Link href="/persons"><a>Person List</a></Link>
    </nav>
   );
}
 
export default Navbar;