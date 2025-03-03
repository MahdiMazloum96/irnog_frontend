import { FC } from "react";
import { GalleryPictures } from "./GalleryPictures";
interface GalleryProps {}
const Gallery: FC<GalleryProps> = () => {
  return (
    <div className="my-48">
      <h1 className="text-6xl text-white text-center mb-24 select-none">
        Gallery
      </h1>
      <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1.5 mx-16">
        {GalleryPictures.map((pic) => {
          return (
            <div>
              <img src={pic.picture} alt="pic" className="rounded-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Gallery;
