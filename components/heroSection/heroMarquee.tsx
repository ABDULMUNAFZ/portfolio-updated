import React, { useEffect } from "react";
import { gsap } from "gsap";

export function HeroMarquee({}) {
  useEffect(() => {
    function roll(
      targets: gsap.TweenTarget,
      vars: gsap.TweenVars,
      reverse?: number,
    ) {
      vars = vars || {};
      vars.ease || (vars.ease = "none");
      const tl = gsap.timeline({
          repeat: -1,
        }),
        elements = gsap.utils.toArray(targets) as HTMLElement[],
        clones = elements.map((el) => {
          let clone = el.cloneNode(true);
          el.parentNode?.appendChild(clone);
          return clone;
        }),
        positionClones = () =>
          elements.forEach((el, i) =>
            gsap.set(clones[i], {
              position: "absolute",
              overwrite: false,
              top: el.offsetTop,
              left: "100%",
            }),
          );
      positionClones();
      elements.forEach((el, i) =>
        tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0),
      );
      const handleResize = () => {
        let time = tl.totalTime();
        tl.totalTime(0);
        positionClones();
        tl.totalTime(time);
      };
      window.addEventListener("resize", handleResize);
      return {
        tl,
        cleanup: () => {
          window.removeEventListener("resize", handleResize);
          clones.forEach((clone) => clone.parentNode?.removeChild(clone));
        },
      };
    }

    const { tl, cleanup } = roll(".rollingText", { duration: 15 });

    return () => {
      cleanup();
      tl.kill();
      gsap.killTweensOf(".rollingText");
    };
  }, []);
  return (
    <div className="wrapperRollingText anime pointer-events-none z-20  select-none  rounded-3xl tracking-[-0.1em] ">
      <div className="rollingText  md:!text-[200px]">
        - Abdul - Munaf - Abdul - Munaf&nbsp;
      </div>
    </div>
  );
}
