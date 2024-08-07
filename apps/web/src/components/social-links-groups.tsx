import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import X from "@mui/icons-material/X";
import Instagram from "@mui/icons-material/Instagram";
import Reddit from "@mui/icons-material/Reddit";
import WhatsApp from "@mui/icons-material/WhatsApp";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Image from "next/image";

export const SocialLinksGroup = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 dark:text-white text-black">
      <a
        href="https://x.com/MaheshMuttinti"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on X"
      >
        <X sx={{ height: 40, width: 40 }} />
      </a>
      <a
        href="https://www.facebook.com/mahesh.muttinti.1999/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on Facebook"
      >
        <Facebook sx={{ height: 40, width: 40, color: "royalblue" }} />
      </a>
      <a
        href="https://www.instagram.com/mahesh.muttinti/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on Instagram"
      >
        <Instagram sx={{ height: 40, width: 40, color: "tomato" }} />
      </a>
      <a
        href="https://wa.me/919603757304?text=Hello Mahesh Muttinti!"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on WhatsApp"
      >
        <WhatsApp sx={{ height: 40, width: 40, color: "lime" }} />
      </a>
      <a
        href="https://www.reddit.com/user/mahesh-muttinti/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on Reddit"
      >
        <Reddit sx={{ height: 40, width: 40, color: "orange" }} />
      </a>
      <a
        href="https://github.com/maheshmuttintidev/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on GitHub"
      >
        <GitHub sx={{ height: 40, width: 40, color: "grey" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/mahesh-muttinti-4a2b61202/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on LinkedIn"
      >
        <LinkedIn sx={{ height: 40, width: 40, color: "cyan" }} />
      </a>
      <a
        href="https://stackoverflow.com/users/26418164/mahesh-muttinti"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on LinkedIn"
      >
        <Image
          src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a"
          alt="Stack Overflow Icon"
          className="object-contain rounded-full"
          width={40}
          height={40}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UC_4y9u6Id5aU2g-_vUMA5Vg"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        title="Connect Mahesh Muttinti on YouTube"
      >
        <YouTube sx={{ height: 40, width: 40, color: "red" }} />
      </a>
      <a
        id="cy-effective-orcid-url"
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        href="https://orcid.org/0009-0000-3994-5923"
        target="orcid.widget"
        rel="me noopener noreferrer"
        title="Connect Mahesh Muttinti on ORCID"
      >
        <Image
          src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
          alt="ORCID iD icon"
          className="object-contain rounded-full"
          height={40}
          width={40}
        />
      </a>
      <a
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        href="https://leetcode.com/u/maheshmuttintidev"
        target="_blank"
        rel="me noopener noreferrer"
        title="Connect Mahesh Muttinti on LeetCode"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
          alt="Leetcode icon"
          className="object-contain rounded-full"
          height={40}
          width={40}
        />
      </a>
      <a
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        href="https://medium.com/@mahesh.muttinti"
        target="_blank"
        rel="me noopener noreferrer"
        title="Connect Mahesh Muttinti on Medium"
      >
        <Image
          src="https://img.icons8.com/?size=40&id=XVNvUWCvvlD9&format=png&color=000000"
          alt="Medium icon"
          className="object-contain rounded-full shadow-black"
          height={40}
          width={40}
        />
      </a>
      <a
        className="hover:scale-105 transition-all bg-white shadow-inner rounded-full p-2 dark:bg-transparent"
        href="https://www.freelancer.com.bd/u/maheshmuttinti"
        target="_blank"
        rel="me noopener noreferrer"
        title="Connect Mahesh Muttinti on Freelancer"
      >
        <Image
          src="https://instagram.fvga4-1.fna.fbcdn.net/v/t51.2885-19/14099561_315748382094564_535645851_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fvga4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=7088Uqo6RoEQ7kNvgGmZ13d&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYAEqcE-pTGqMzavuet8686H_yaGmoOcIq12kkzagA5Ziw&oe=66B91E70&_nc_sid=8f1549"
          alt="Freelancer icon"
          className="object-contain rounded-full shadow-black"
          height={40}
          width={40}
        />
      </a>
    </div>
  );
};
