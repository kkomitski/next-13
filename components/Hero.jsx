"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";

function Hero() {
  const [backgroundPos, setBackgroundPos] = useState({
    x: 0,
    y: 0,
  });

  // const awesome = useRef(null);

  // console.log(this.myTextInput);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setBackgroundPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  // awesome.style.backgroundPosition = "0px 30px";

  return (
    <section
      // id="awesome"
      // style={{
      //   backgroundPositionX: backgroundPos.x + window.innerWidth * 0.5,
      //   backgroundPositionY: backgroundPos.y + window.innerHeight * 0.75,
      // }}
      className="-mt-8 flex h-[860px] flex-col justify-center bg-black pl-28"
    >
      <div className="">
        <h1 className="text-8xl tracking-wider text-white">
          Let&apos;s make something
        </h1>
        <h1
          id="awesome"
          style={{
            backgroundPositionX: backgroundPos.x + window.innerWidth * 0.5,
            backgroundPositionY: backgroundPos.y + window.innerHeight * 0.5,
          }}
          className="text-8xl tracking-wider text-white"
        >
          awesome
        </h1>
        {/* <h1 className="text-8xl tracking-wider text-white">together</h1> */}
      </div>
    </section>
  );
}

export default Hero;
