import "./MissionVision.css";

export function BespokeAutomation() {
  const missionImage = "/mission.jpg";
  const visionImage = "/vision.jpg";

  const visionText =
      "Vores vision er en fremtid hvor vi ikke frygter AI men adapterer og arbejder sammen med den. En fremtid, hvor DU har mere tid, mere frihed og mindre stress.";

  const missionText =
      "At transformerer virksomheder til moderne super-virksomheder som arbejder langt mere effektivt på langt kortere tid";

  return (
      <section
          id="mission-vision"
          className="relative bg-black text-white py-20"
      >
        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-16 xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="space-y-3">
              <h3 className="mv-toplabel">Vision</h3>
              <div className="mv-card" aria-label="Vision">
                <div
                    className="mv-card__bg"
                    style={{ backgroundImage: `url(${visionImage})` }}
                    aria-hidden
                />
                <div className="mv-card__scrim" aria-hidden />
                <div className="mv-card__content">
                  <span className="mv-card__eyebrow">Vision</span>
                  <h4 className="mv-card__title">Vores vision</h4>
                  <p className="mv-card__description">{visionText}</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-3">
              <h3 className="mv-toplabel">Mission</h3>
              <div className="mv-card" aria-label="Mission">
                <div
                    className="mv-card__bg"
                    style={{ backgroundImage: `url(${missionImage})` }}
                    aria-hidden
                />
                <div className="mv-card__scrim" aria-hidden />
                <div className="mv-card__content">
                  <span className="mv-card__eyebrow">Mission</span>
                  <h4 className="mv-card__title">Vores mission</h4>
                  <p className="mv-card__description">{missionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default BespokeAutomation;
