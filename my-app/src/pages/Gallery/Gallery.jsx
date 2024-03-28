import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/NavBar/Nav";
import images from "../../data/galleryImages";
import Im from "../../images/gallery.jpg";
import { useEffect, useState } from "react";
import { cardio } from "ldrs";
cardio.register();

function Gallery() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loader ? (
        <div className="preloader">
          <l-cardio size="70" speed="1.3" color="#db0001"></l-cardio>
        </div>
      ) : (
        <div>
          <Nav />

          <Banner image={Im} />

          <div class="p-5 sm:p-8">
            <div class="mt-20 columns-1 gap-5 sm:columns-1 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-4">
              {images.map((image) => {
                return <img src={image.image} alt="People" key={image.key}/>;
              })}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
export default Gallery;
