import profilePhoto from "@/public/images/profile-photo.jpg";
import Image from "next/image";

export const MyProfilePic = () => (
  <section className="w-full mx-auto">
    <Image
      src={profilePhoto}
      alt="Michał Jasiński"
      width={200}
      height={200}
      priority={true}
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    />
  </section>
);
