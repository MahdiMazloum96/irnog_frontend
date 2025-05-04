import { FC } from "react";
import { GalleryPictures } from "./GalleryPictures";
import Image from "next/image";
import defaultImage from "../../public/pics/defaultIMage/default.png";
interface GalleryProps {}
const Gallery: FC<GalleryProps> = () => {
  return (
    <div className="my-48">
      <h1 className="text-6xl text-white text-center mb-24 select-none">
        Gallery
      </h1>
      <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1.5 mx-16">
        {GalleryPictures.map((pic, index) => {
          return (
            <div key={index}>
              <Image
                src={pic.picture || defaultImage}
                alt="pic"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Gallery;
