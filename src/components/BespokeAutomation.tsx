import "./MissionVision.css";

export function BespokeAutomation() {
  const visionText =
      "Vores vision er en fremtid hvor vi ikke frygter AI men adapterer og arbejder sammen med den. En fremtid, hvor DU har mere tid, mere frihed og mindre stress.";

  const missionText =
      "At transformerer virksomheder til moderne super-virksomheder som arbejder langt mere effektivt på langt kortere tid";

  return (
      <section id="mission-vision" className="relative bg-black text-white py-20">
        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-16 xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="mv-card-simple">
              <h3 className="mv-title">Vision</h3>
              <p className="mv-text">{visionText}</p>
            </div>

            {/* Mission */}
            <div className="mv-card-simple">
              <h3 className="mv-title">Mission</h3>
              <p className="mv-text">{missionText}</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default BespokeAutomation;
