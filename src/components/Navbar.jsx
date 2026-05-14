import Image from "next/image";
import { navLinks } from "../../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav aria-label="Main navigation">
      <div>
        <a
          href="#home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-95"
          aria-label="Velvet Pour - Home"
        >
          <Image
            src="/images/logo.png"
            alt="Velvet Pour logo"
            width={32}
            height={32}
            priority
          />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link, idx) => {
            return (
              <li key={idx + 1} className="transition-opacity hover:opacity-90">
                <a href={link.id}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
