import { openingHours, socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image.js";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <footer id="contact" aria-label="Contact and location information">
      <img
        src="/images/footer-right-leaf.png"
        alt="Decorative right leaf"
        id="f-right-leaf"
        aria-hidden="true"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="Decorative left leaf"
        id="f-left-leaf"
        aria-hidden="true"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>Cheese Street #248, Karachi, Pakistan</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            <a href="tel:+923472037476">+92 3472037476</a>
          </p>
          <p>
            <a href="mailto:rahimsiddiqui122@gmail.com">
              rahimsiddiqui122@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5" aria-label="Social media links">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  width={28}
                  height={28}
                  alt=""
                  src={social.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
