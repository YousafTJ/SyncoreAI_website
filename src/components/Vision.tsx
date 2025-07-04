// src/components/Vision.tsx
import Aurora from "./Aurora";

export function Vision() {
  return (
      <section
          id="vision"
          className="relative bg-black text-white py-16 overflow-hidden"
      >
        {/* Aurora baggrund */}
        <div className="absolute inset-0 -z-10">
          <Aurora
              colorStops={["#22C55E", "#A855F7", "#1E3A8A"]}
              blend={0.4}
              amplitude={0.8}
              speed={0.6}
          />
        </div>

        <div className="mx-auto w-full max-w-[1100px] px-8 md:px-16 xl:px-28">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-violet-200">
            Socials
          </h2>

          {/* Uiverse-kortet (lilla tema) */}
          <div className="ui-parent mx-auto">
            <div className="ui-card">
              <div className="ui-logo">
                <span className="ui-circle ui-circle1" />
                <span className="ui-circle ui-circle2" />
                <span className="ui-circle ui-circle3" />
                <span className="ui-circle ui-circle4" />
                <span className="ui-circle ui-circle5">
                {/* “stjerne”/logo glyph – hvid */}
                  <svg viewBox="0 0 29.667 31.69" className="svg" aria-hidden>
                  <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" />
                  <path
                      d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                      transform="translate(-45.91 0)"
                  />
                  <path
                      d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                      transform="translate(0 -51.963)"
                  />
                </svg>
              </span>
              </div>

              <div className="ui-glass" />

              <div className="ui-content">
                <span className="ui-title">Følg os</span>
                <span className="ui-text">LinkedIn · Instagram · TikTok</span>
              </div>

              <div className="ui-bottom">
                <div className="ui-socials">
                  {/* Instagram */}
                  <a
                      className="ui-social"
                      href="https://www.instagram.com/syncoreai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="svg" aria-hidden>
                      <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="4"
                          fill="none"
                      />
                      <circle cx="12" cy="12" r="4.25" fill="none" />
                      <circle cx="17.2" cy="6.8" r="1.2" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                      className="ui-social"
                      href="https://www.linkedin.com/company/syncoreai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="svg" aria-hidden>
                      <rect
                          x="2.8"
                          y="2.8"
                          width="18.4"
                          height="18.4"
                          rx="3.6"
                          fill="none"
                      />
                      <circle cx="8" cy="8.2" r="1.15" />
                      <rect
                          x="6.9"
                          y="10.1"
                          width="2.25"
                          height="7.4"
                          rx="1.1"
                      />
                      <path d="M12.7 10.1h2.3v1.1c.65-.85 1.5-1.35 2.7-1.35 2.0 0 3.1 1.32 3.1 3.48V18h-2.2v-3.05c0-1.02-.5-1.65-1.5-1.65-1.06 0-1.7.72-1.7 1.7V18h-2.7v-7.9z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                      className="ui-social"
                      href="https://www.tiktok.com/@syncore_ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                  >
                    <svg viewBox="0 0 24 24" className="svg" aria-hidden>
                      <path
                          d="M13.3 4v5c1.3 1 2.9 1.6 4.6 1.7v2.2c-2-.1-3.6-.7-4.6-1.5v3.4a4 4 0 11-2.7-3.8V4h2.7z"
                          className="tt-cyan"
                      />
                      <path
                          d="M14.1 4v5.1c1.6 1.1 3.2 1.8 5 1.9V15c-2.1-.1-3.8-.8-5-1.8V18a4.5 4.5 0 11-3.1-4.2V4h3.1z"
                          className="tt-pink"
                      />
                      <path d="M14 4v5.3c1.5 1.2 3.2 1.9 5 2v2.6c-2.1-.1-3.8-.8-5-1.8V18a4.5 4.5 0 11-3-4.2V4h3z" />
                    </svg>
                  </a>
                </div>

                <div className="ui-viewmore">
                  <button
                      className="ui-viewmore-btn"
                      onClick={() =>
                          window.open(
                              "https://www.linkedin.com/company/syncoreai/",
                              "_blank"
                          )
                      }
                  >
                    Se mere
                  </button>
                  <svg
                      className="svg"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stilark – lilla tema */}
        <style>{`
        .ui-parent {
          width: min(90vw, 580px);
          height: 340px;
          perspective: 1000px;
        }
        .ui-card {
          height: 100%;
          border-radius: 36px;
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow:
            rgba(80, 24, 120, 0) 40px 50px 25px -40px,
            rgba(124, 58, 237, 0.25) 0px 25px 25px -5px;
          position: relative;
        }
        .ui-glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 40px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.86) 100%);
          transform: translate3d(0, 0, 25px);
          border-left: 1px solid white;
          border-bottom: 1px solid white;
          transition: all 0.5s ease-in-out;
        }

        .ui-content {
          padding: 90px 60px 0 30px;
          transform: translate3d(0, 0, 26px);
        }
        .ui-title {
          display: block;
          color: #ffffff; /* hvid */
          font-weight: 900;
          font-size: 20px;
          letter-spacing: .3px;
        }
        .ui-text {
          display: block;
          color: #ffffff; /* hvid */
          font-size: 15px;
          margin-top: 18px;
        }

        .ui-bottom {
          padding: 10px 12px;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 20px; left: 20px; right: 20px;
          display: flex; align-items: center; justify-content: space-between;
          transform: translate3d(0, 0, 26px);
        }

        .ui-viewmore {
          display: flex; align-items: center; width: 40%; justify-content: flex-end;
          transition: transform .2s ease-in-out;
        }
        .ui-viewmore:hover { transform: translate3d(0, 0, 10px); }
        .ui-viewmore-btn {
          background: none; border: none; color: #ffffff; /* hvid */
          font-weight: 800; font-size: 12px; cursor: pointer;
        }
        .ui-viewmore .svg {
          fill: none; stroke: #ffffff; /* hvid */
          stroke-width: 3px; max-height: 15px; margin-left: 6px;
        }

        .ui-socials { display: flex; gap: 10px; transform-style: preserve-3d; }
        .ui-social {
          width: 34px; aspect-ratio: 1; padding: 6px;
          background: #ffffff; border-radius: 999px; display: grid; place-content: center;
          box-shadow: rgba(124, 58, 237, 0.45) 0px 7px 5px -5px;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .ui-social .svg {
          width: 16px;
          fill: #7c3aed;
          stroke: #7c3aed;
          stroke-width: 2;
        }
        .ui-social .svg rect,
        .ui-social .svg circle,
        .ui-social .svg path {
          stroke: #7c3aed;
        }
        .ui-social:hover {
          background: #0b0b0f;
          transform: translate3d(0,0,50px);
          box-shadow: rgba(124, 58, 237, 0.35) -5px 20px 10px 0px;
        }
        .ui-social:hover .svg,
        .ui-social:hover .svg rect,
        .ui-social:hover .svg circle,
        .ui-social:hover .svg path {
          fill: #ffffff; stroke: #ffffff;
        }
        .ui-social .tt-cyan { fill: #25F4EE; }
        .ui-social .tt-pink { fill: #FE2C55; }

        .ui-logo { position: absolute; right: 0; top: 0; transform-style: preserve-3d; }
        .ui-circle {
          position: absolute; aspect-ratio: 1; border-radius: 50%;
          top: 0; right: 0;
          box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
          backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
          background: rgba(168, 85, 247, 0.2);
          transition: all 0.5s ease-in-out;
        }
        .ui-circle1 { width: 170px; transform: translate3d(0,0,20px); top: 8px; right: 8px; }
        .ui-circle2 { width: 140px; transform: translate3d(0,0,40px); top: 10px; right: 10px; transition-delay: .4s; }
        .ui-circle3 { width: 110px; transform: translate3d(0,0,60px); top: 17px; right: 17px; transition-delay: .8s; }
        .ui-circle4 { width: 80px;  transform: translate3d(0,0,80px); top: 23px; right: 23px; transition-delay: 1.2s; }
        .ui-circle5 {
          width: 50px; transform: translate3d(0,0,100px); top: 30px; right: 30px;
          display: grid; place-content: center; transition-delay: 1.6s;
        }
        .ui-circle5 .svg { width: 20px; fill: white; }

        .ui-parent:hover .ui-card {
          transform: rotate3d(1, 1, 0, 28deg);
          box-shadow:
            rgba(124, 58, 237, 0.28) 30px 50px 25px -40px,
            rgba(124, 58, 237, 0.18) 0px 25px 30px 0px;
        }
        .ui-parent:hover .ui-circle2 { transform: translate3d(0,0,60px); }
        .ui-parent:hover .ui-circle3 { transform: translate3d(0,0,80px); }
        .ui-parent:hover .ui-circle4 { transform: translate3d(0,0,100px); }
        .ui-parent:hover .ui-circle5 { transform: translate3d(0,0,120px); }
      `}</style>
      </section>
  );
}

export default Vision;
