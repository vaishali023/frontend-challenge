import React from "react";
import { RecentlyAddedContainer, ImageCard } from "./RecentlyAdded.styles";

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

const RecentlyAdded: React.FC<{
  images: Image[];
  onSelectImage: (image: Image) => void;
}> = ({ images, onSelectImage }) => {
  const sortedImages = images.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <RecentlyAddedContainer>
      {sortedImages.map((image) => (
        <ImageCard key={image.id} onClick={() => onSelectImage(image)}>
          <img src={image.url} alt={image.filename} />
          <p>
            <strong>{image.filename}</strong>
          </p>
          <p> {`${(image.sizeInBytes / 1000000).toFixed(2)} MB`}</p>
        </ImageCard>
      ))}
    </RecentlyAddedContainer>
  );
};

export default RecentlyAdded;
