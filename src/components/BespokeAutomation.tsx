// src/components/BespokeAutomation.tsx
import React from "react";

export function BespokeAutomation() {
  const visionText =
      "Vores vision er en fremtid hvor vi ikke frygter AI men adapterer og arbejder sammen med den. En fremtid, hvor DU har mere tid, mere frihed og mindre stress.";

  const missionText =
      "At transformere virksomheder til moderne super-virksomheder som arbejder langt mere effektivt på langt kortere tid";

  return (
      <section
          id="mission-vision"
          className="relative bg-white text-gray-900 py-20"
      >
        <style>{`
        /* Mission/Vision bokse */
        .mv-box {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .mv-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.1);
        }
        .mv-box-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #7c3aed;
          margin-bottom: 1rem;
        }
        .mv-box-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #374151;
        }

        /* Mission: Salgskort */
        .mv-sale-card {
          width: 164px;
          height: 276px;
          background: #000000;
          border: 3px solid rgb(17, 4, 94);
          border-radius: 15px;
          position: relative;
          padding: 5px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          transition: all 1s ease;
          color: antiquewhite;
          margin: 0 auto;
        }
        .mv-sale-card::before {
          content: "";
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: 10px;
          right: 77px;
          border-radius: 50%;
          background-color: rgb(17, 4, 94);
        }
        .mv-sale-date {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
        }
        .mv-sale-time {
          font-size: 2em;
        }
        .mv-sale-popup {
          background-color: #444746;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          font-size: 0.8em;
          padding: 3px;
        }
        .mv-sale-popup .mv-sale-title {
          font-size: 9px;
          color: #9cbde2;
        }
        .mv-sale-date,
        .mv-sale-popup {
          opacity: 0;
          transition: all 0.5s ease;
        }
        .mv-sale-card:hover {
          transform: rotate3d(5, 5, 10, -45deg);
        }
        .mv-sale-card:hover .mv-sale-date,
        .mv-sale-card:hover .mv-sale-popup {
          opacity: 1;
        }

        /* Vision: Telefonkort */
        .mv-phone-card {
          width: 210px;
          height: 400px;
          background: black;
          border-radius: 35px;
          border: 2px solid rgb(40, 40, 40);
          padding: 7px;
          position: relative;
          box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.3);
          margin: 0 auto;
        }
        .mv-phone-int {
          background-image: linear-gradient(
            to right bottom,
            #ff0000,
            #ff0045,
            #ff0078,
            #ea00aa,
            #b81cd7,
            #8a3ad6,
            #5746cf,
            #004ac2,
            #003d94,
            #002e66,
            #001d3a,
            #020812
          );
          background-size: 200% 200%;
          height: 100%;
          border-radius: 25px;
          transition: all 0.6s ease-out;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mv-phone-card:hover .mv-phone-int {
          background-position: 100% 100%;
        }
        .mv-phone-top {
          position: absolute;
          top: 0;
          right: 50%;
          transform: translate(50%, 0%);
          width: 35%;
          height: 18px;
          background-color: black;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        .mv-phone-speaker {
          position: absolute;
          top: 2px;
          right: 50%;
          transform: translate(50%, 0%);
          width: 40%;
          height: 2px;
          border-radius: 2px;
          background-color: rgb(20, 20, 20);
        }
        .mv-phone-camera {
          position: absolute;
          top: 6px;
          right: 84%;
          transform: translate(50%, 0%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }
        .mv-phone-camera-int {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
          background-color: rgba(0, 0, 255, 0.25);
        }
        .mv-phone-hello {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem; /* mindre tekst */
          font-weight: bold;
          text-align: center;
          line-height: 2rem; /* mere luft */
          padding: 1rem;
          transition: 0.5s ease-in-out;
        }
        .mv-phone-hidden {
          display: block;
          opacity: 0;
          transition: all 0.3s ease-in;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }
        .mv-phone-card:hover .mv-phone-hidden {
          opacity: 1;
        }
        .mv-phone-card:hover .mv-phone-hello {
          transform: translateY(-15px);
        }
      `}</style>

        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-16 xl:px-28 space-y-20">
          {/* Row 1: Mission + Salgskort */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mv-box text-left">
              <h2 className="mv-box-title">Mission</h2>
              <p className="mv-box-text">{missionText}</p>
            </div>

            <div className="flex justify-center">
              <div className="mv-sale-card">
                <div className="mv-sale-date">
                  <span className="mv-sale-time">14:34</span>
                  <span className="mv-sale-day">Mandag, 21 August</span>
                </div>
                <div className="mv-sale-popup">
                  <p className="mv-sale-title">Salg</p>
                  <p>Mail sendt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Telefon + Vision (byttet om) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="mv-phone-card">
                <div className="mv-phone-int">
                  <div className="mv-phone-hello">
                    SyncoreAI
                    <span className="mv-phone-hidden">
                    Din digitale medarbejder
                  </span>
                  </div>
                </div>
                <div className="mv-phone-top">
                  <div className="mv-phone-camera">
                    <div className="mv-phone-camera-int"></div>
                  </div>
                  <div className="mv-phone-speaker"></div>
                </div>
              </div>
            </div>

            <div className="mv-box text-left">
              <h2 className="mv-box-title">Vision</h2>
              <p className="mv-box-text">{visionText}</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default BespokeAutomation;
