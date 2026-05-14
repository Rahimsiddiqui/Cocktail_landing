import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const ptl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    ptl
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  }, []);

  return (
    <section id="cocktails" className="noisy" aria-label="Cocktails section">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="Decorative left leaf"
        id="c-left-leaf"
        aria-hidden="true"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="Decorative right leaf"
        id="c-right-leaf"
        aria-hidden="true"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map((list) => (
              <li key={list.name}>
                <div className="md:me-28">
                  <h3>{list.name}</h3>
                  <p>
                    {list.country} | {list.detail}
                  </p>
                </div>
                <span>{list.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map((list) => (
              <li key={list.name}>
                <div className="md:me-28">
                  <h3>{list.name}</h3>
                  <p>
                    {list.country} | {list.detail}
                  </p>
                </div>
                <span>{list.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
