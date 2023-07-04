import { Posts } from "@/app/components";

export const revalidate = 10;

const HomePage = () => (
  <main className="px-6 mx-auto">
    <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
      Hello and Welcome 👋&nbsp;
      <span className="whitespace-nowrap">
        I&apos;m <span className="font-bold">Michał</span>.
      </span>
    </p>
    <Posts />
  </main>
);

export default HomePage;
