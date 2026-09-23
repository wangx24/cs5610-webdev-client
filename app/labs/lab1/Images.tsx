export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A classic photo for NEU:
      <br />
      <img
        id="wd-your-image"
        src="/images/neu.jpg"
        height="200px"
        alt="The Northeastern University sign on Krentzman Quadrangle"
      />
      <br />
      Another image loaded from the internet:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~orig.jpg"
        height="200px"
        alt="The near side of the Moon"
      />
    </div>
  );
}
