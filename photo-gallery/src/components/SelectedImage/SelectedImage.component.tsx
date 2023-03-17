import React from "react";
import { useState, useEffect } from "react";
import { FaHeart, FaHeartBroken, FaTrash } from "react-icons/fa";

import {
  SelectedImageContainer,
  InfoContainer,
  HorizontalLine,
} from "./SelectedImage.styles";

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

interface SelectedImageProps {
  image: Image | null;
  onFavouriteToggle: (image: Image) => void;
  onDelete: (image: Image) => void;
}

const SelectedImage: React.FC<SelectedImageProps> = ({
  image,
  onFavouriteToggle,
  onDelete,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    image?.favorited ?? false
  );

  useEffect(() => {
    setIsFavorite(image?.favorited ?? false);
  }, [image]);

  const handleFavouriteToggle = () => {
    if (image) {
      const updatedImage = { ...image, favorited: !isFavorite };
      setIsFavorite(!isFavorite);
      onFavouriteToggle(updatedImage);
    }
  };
  const formattedDate = React.useMemo(() => {
    if (!image) return "";
    const date = new Date(image.createdAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [image]);

  const modifiedDate = React.useMemo(() => {
    if (!image) return "";
    const date = new Date(image.updatedAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [image]);

  return (
    <SelectedImageContainer>
      {image ? (
        <>
          <img src={image.url} alt={image.filename} />
          <h2>{image.filename}</h2>
          <div className="selected-image__buttons">
            <button
              className="button button--favorite"
              onClick={handleFavouriteToggle}
            >
              {isFavorite ? (
                <FaHeart className="icon-heart--red" />
              ) : (
                <FaHeartBroken className="icon-heart--empty" />
              )}
            </button>
          </div>
          <p>{`${(image.sizeInBytes / 1000000).toFixed(2)} MB`}</p>
          <InfoContainer>
            <h3>Information</h3>
            <HorizontalLine />
            <p>
              {" "}
              Uploaded by:<span> {image.uploadedBy} </span>
            </p>
            <HorizontalLine />
            <p>
              Created <span>{formattedDate}</span>{" "}
            </p>
            <HorizontalLine />
            <p>
              Last Modified <span>{modifiedDate}</span>
            </p>
            <HorizontalLine />
            <p>
              Dimensions{" "}
              <span>
                {" "}
                {`${image.dimensions.width}x${image.dimensions.height}`}
              </span>
            </p>
            <HorizontalLine />
            <p>
              {" "}
              Resolution
              <span>
                {`${image.resolution.width}x${image.resolution.height}`}{" "}
              </span>
            </p>
            <HorizontalLine />
          </InfoContainer>
          {image.description && (
            <><h3>Description</h3><p>{image.description}</p></>
            )
            }
          <button
            className="button button--delete"
            onClick={() => onDelete(image)}
          >
            Delete <FaTrash />
          </button>
        </>
      ) : (
        <p>No image selected</p>
      )}
    </SelectedImageContainer>
  );
};

export default SelectedImage;
