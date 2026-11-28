/** Full-width photo band with a dark overlay, used on the Our Presence and region pages. */
function ImageBand() {
  return (
    <section
      role="img"
      aria-label="EuroDigital team handling customer conversations with AI voice and chat agents"
      className="relative isolate h-80 overflow-hidden bg-cover bg-center bg-no-repeat md:h-140"
      style={{ backgroundImage: "url('/backgroundImages/contact-band.jpg')" }}
    >
      <div className="absolute inset-0 -z-10 bg-[#0b1538]/80" aria-hidden="true" />
    </section>
  );
}

export default ImageBand;
