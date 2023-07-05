import { MyProfilePic, Posts } from "@/app/components";

export const revalidate = 86400;

const HomePage = () => (
  <main className="mx-auto">
    <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
      Hello and Welcome 👋&nbsp;
      <span className="whitespace-nowrap">
        I'm <span className="font-bold">Michał</span>.
      </span>
    </p>
    <MyProfilePic />
    <Posts />
  </main>
);

export default HomePage;
