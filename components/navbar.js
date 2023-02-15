import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/salesforce.svg" width={180} height={66} />
        </Link>
      </div>

      <Link href="/">
        <h3>Home</h3>
      </Link>

      <Link href="/clubs/club">
        <h3>Clubs</h3>
      </Link>
      <Link href="/member">
        <h3>Members</h3>
      </Link>
      <Link href="/attendance">
        <h3>Attendance</h3>
      </Link>
      <Link href="/about">
        <h3>About</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
