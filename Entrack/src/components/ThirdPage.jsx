import React, { useEffect, useRef, useState } from "react";
import "../styles/thirdpage.css";

/*
 Place your images in the public folder:
 public/images/one.jpg, two.jpg, three.jpg, four.jpg, five.jpg
 Using public path (/images/one.jpg) so Vite/CRA serves them directly.
*/

const items = [
  { src: "/images/one.jpg", title: "HEALTH CARE", desc: "manage patients and staff", cls: "imagecontainer1" },
  { src: "/images/two.jpg", title: "FITNESS", desc: "manage memberships", cls: "imagecontainer2" },
  { src: "/images/three.jpg", title: "RESIDENCE", desc: "manage large residential areas efficiently", cls: "imagecontainer3" },
  { src: "/images/four.jpg", title: "UNIVERSITIES", desc: "", cls: "imagecontainer4" },
  { src: "/images/five.jpg", title: "LIBRARIES", desc: "", cls: "imagecontainer5" },
];

export default function ThirdPage() {
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const translateRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [setWidth, setSetWidth] = useState(0);

  // Speed in pixels per second
  const SPEED = 50; // adjust: larger => faster

  useEffect(() => {
    // measure width of one track set after render
    function measure() {
      if (!setRef.current) return;
      const w = setRef.current.offsetWidth;
      setSetWidth(w);
    }
    measure();
    // re-measure on resize
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    function step(time) {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = time;

      if (!paused && setWidth > 0) {
        translateRef.current += SPEED * delta;
        // loop seamlessly by wrapping translate modulo setWidth
        if (translateRef.current >= setWidth) {
          translateRef.current = translateRef.current - setWidth;
        }
        // apply transform
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${translateRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [paused, setWidth]);

  return (
    <div
      id="third-page"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="image-track-outer">
        {/* image-track is the moving element, containing two identical track-sets */}
        <div className="image-track" ref={trackRef}>
          {/* First set */}
          <div className="track-set" ref={setRef}>
            {items.map((it, i) => (
              <div key={`a-${i}`} className={`imagecontainer ${it.cls}`}>
                {it.desc && <p className="img-desc">{it.desc}</p>}
                <h1 className="img-title">{it.title}</h1>
                <img className="hvr-grow" src={it.src} alt={it.title} />
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div className="track-set">
            {items.map((it, i) => (
              <div key={`b-${i}`} className={`imagecontainer ${it.cls}`}>
                {it.desc && <p className="img-desc">{it.desc}</p>}
                <h1 className="img-title">{it.title}</h1>
                <img className="hvr-grow" src={it.src} alt={it.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
