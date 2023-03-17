import React from "react";
import { FavoriteImagesContainer } from "./Favorited.styles";
import { ImageCard } from "./Favorited.styles";

interface Image {
  id: number;
  createdAt: string;
  updatedAt: string;
  filename: string;
  url: string;
  favorited: boolean;
  uploadedBy: string;
  dimensions: {
    height: number;
    width: number;
  };
  resolution: {
    height: number;
    width: number;
  };
  sizeInBytes: number;
  description: string;
}

const Favorited: React.FC<{
  images: Image[];
  onSelectImage: (image: Image) => void;
}> = ({ images, onSelectImage }) => {
  // Filter the images array to only show the favorited images
  const favoritedImages = images.filter((image) => image.favorited);

  return (
    <FavoriteImagesContainer>
      {favoritedImages.map((image) => (
        <ImageCard key={image.id} className="favourites__item">
          <img
            src={image.url}
            alt={image.filename}
            onClick={() => onSelectImage(image)}
          />
          <p>
            <strong>{image.filename}</strong>
          </p>
          <p>{`${(image.sizeInBytes / 1000000).toFixed(2)} MB`}</p>
        </ImageCard>
      ))}
    </FavoriteImagesContainer>
  );
};

export default Favorited;
