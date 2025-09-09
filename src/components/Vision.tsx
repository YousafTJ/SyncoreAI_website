// src/components/Vision.tsx
export function Vision() {
  return (
      <section
          id="vision"
          className="relative bg-white text-black py-16 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-16 xl:px-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Venstre side - Socials */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-black">
              Socials
            </h2>
            <div className="flex justify-center md:justify-start">
              <div className="vision-card">
                <div className="vision-background"></div>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/syncoreai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vision-box vision-box1 vision-icon"
                    aria-label="Instagram"
                >
                  <svg
                      className="vision-svg-instagram"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill="none"
                        stroke="white"
                        strokeWidth="40"
                        d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.41-71-6.48-94.3-6.48s-73.27-1.93-94.3,6.48a54,54,0,0,0-30.41,30.41c-8.41,21-6.48,71-6.48,94.3s-1.93,73.27,6.48,94.3a54,54,0,0,0,30.41,30.41c21,8.41,71,6.48,94.3,6.48s73.27,1.93,94.3-6.48a54,54,0,0,0,30.41-30.41c8.41-21,6.48-71,6.48-94.3S357.12,182.71,348.71,161.71ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.33-148a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,309.33,190Z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/company/syncoreai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vision-box vision-box2 vision-icon"
                    aria-label="LinkedIn"
                >
                  <svg className="vision-svg-small" viewBox="0 0 24 24" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5S1 4.6 1 3.5 1.91 1.5 3 1.5s1.98.9 1.98 2zM1 8h4v12H1zM9 8h3.8v1.7h.05c.5-.95 1.75-2 3.6-2 3.85 0 4.55 2.5 4.55 5.7V20H17v-5.6c0-1.35-.05-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3V20H9z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                    href="https://www.tiktok.com/@syncore_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vision-box vision-box3 vision-icon"
                    aria-label="TikTok"
                >
                  <svg className="vision-svg-small" viewBox="0 0 48 48" aria-hidden>
                    <path d="M31.5,5.5c2.1,0,4.1,0,6.2,0c0.2,2.4,0.9,4.7,2.2,6.7c1.3,2.1,3.1,3.8,5.3,5c-0.1,2.1,0,4.2,0,6.3
                  c-2.6-0.1-5.2-0.8-7.5-2.1c-1-0.6-1.9-1.3-2.8-2.1c0,5.7,0,11.4,0,17.1c-0.1,2.1-0.7,4.3-1.9,6.1c-1.7,2.6-4.5,4.5-7.5,5.2
                  c-2.4,0.6-5,0.6-7.4-0.1c-2.6-0.8-5-2.5-6.6-4.7c-1.8-2.4-2.7-5.5-2.5-8.5c0.2-2.9,1.3-5.8,3.2-8c2.1-2.4,5.2-4,8.4-4.4
                  c2-0.3,4.1-0.2,6.1,0.4c0,2.5,0,5.1,0,7.6c-1.3-0.9-3-1.2-4.5-0.9c-1.5,0.3-2.9,1.2-3.8,2.4c-0.8,1.1-1.2,2.6-1,4
                  c0.1,1.3,0.7,2.6,1.6,3.6c1,1,2.4,1.6,3.8,1.6c1.3,0,2.7-0.6,3.7-1.6c0.6-0.7,1-1.6,1.1-2.5c0.1-5.7,0-11.4,0.1-17.1
                  C29.3,12.1,31.6,8.9,31.5,5.5z"/>
                  </svg>
                </a>

                <div className="vision-box vision-box4"></div>
              </div>
            </div>
          </div>

          {/* Højre side - "Hvad tilbyder vi?" */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-black">
              Hvad tilbyder vi?
            </h2>
            <img
                src="/pil-syncore.png"
                alt="Pil Syncore"
                className="mx-auto md:mx-0 w-[1000px] md:w-[1200px]"
            />
          </div>
        </div>

        {/* CSS beholdes fra tidligere */}
        <style>{`
        .vision-card {
          position: relative;
          width: 260px;
          height: 260px;
          background: #f5f5f5;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 29px 0px;
          transition: all 1s ease-in-out;
          border: 2px solid #ddd;
        }
        .vision-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        }
        .vision-icon { display: inline-block; }
        .vision-svg-instagram {
          width: 70%;
          height: 70%;
          display: block;
          margin: auto;
          stroke: white;
          stroke-width: 40;
          fill: transparent;
        }
        .vision-svg-small {
          fill: rgba(255, 255, 255, 0.9);
          width: 55%;
          height: 55%;
          display: block;
          margin: auto;
          transition: all 0.5s ease-in-out;
        }
        .vision-box {
          position: absolute;
          padding: 10px;
          text-align: center;
          background: rgba(255, 255, 255, 0.25);
          border-top: 2px solid white;
          border-right: 1px solid white;
          border-radius: 12px;
          box-shadow: rgba(0,0,0,0.15) -7px 7px 20px 0px;
          transform-origin: bottom left;
          transition: all 1s ease-in-out;
        }
        .vision-box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: all 0.5s ease-in-out;
        }
        .vision-box:hover .vision-svg-instagram,
        .vision-box:hover .vision-svg-small { fill: #fff; }
        .vision-box1 { width: 70%; height: 70%; bottom: -70%; left: -70%; }
        .vision-box1::before {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #ff53d4 60%, #62c2fe 90%);
        }
        .vision-box1:hover::before { opacity: 1; }
        .vision-box2 { width: 50%; height: 50%; bottom: -50%; left: -50%; transition-delay: 0.2s; }
        .vision-box2::before { background: #0077b5; }
        .vision-box2:hover::before { opacity: 1; }
        .vision-box3 { width: 30%; height: 30%; bottom: -30%; left: -30%; transition-delay: 0.4s; }
        .vision-box3::before { background: #010101; }
        .vision-box3:hover::before { opacity: 1; }
        .vision-box4 { width: 10%; height: 10%; bottom: -10%; left: -10%; transition-delay: 0.6s; }
        .vision-card:hover { transform: scale(1.1); }
        .vision-card:hover .vision-box { bottom: -1px; left: -1px; }
      `}</style>
      </section>
  );
}

export default Vision;
