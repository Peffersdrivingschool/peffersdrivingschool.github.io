const passPhotos = Array.from({ length: 13 }, (_, index) => ({
  src: `/images/recent-passes/pass-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Recent Peffers Driving School pass ${index + 1}`,
}));

export function PassReel() {
  return (
    <div className="pass-reel" aria-label="Recent driving test passes">
      <div className="pass-reel-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Recent passes
          </p>
          <h3>Well done to my recent learners.</h3>
        </div>
        <p>Swipe to see more.</p>
      </div>

      <div className="pass-reel-track">
        {passPhotos.map((photo) => (
          <figure className="pass-reel-card" key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>Passed</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
