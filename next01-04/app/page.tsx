import Link from "next/link";

const HomePage = () => (
  <>
    <h1>Home Page</h1>
    <Link href="/about">Go to About</Link>
    <Link href="/users">Go to Users</Link>
  </>
);

export default HomePage;
