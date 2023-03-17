import { useState, useEffect } from "react";
import Favorited from "./components/Favorited/Favorited.component";
import RecentlyAdded from "./components/RecentlyAdded/RecentlyAdded.component";
import SelectedImage from "./components/SelectedImage/SelectedImage.component";
import {
  Tabs,
  TabPanel,

} from "react-tabs";
import { GalleryContainer, TabListStyle, StyledTab, GlobalStyle } from "./App.styles";
import axios from "axios";

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

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    axios
      .get("https://agencyanalytics-api.vercel.app/images.json")
      .then((response) => {
        const images = response.data.map((image: any) => ({
          ...image,
        })) as Image[];
        setImages(images);
      });
  }, []);

  const handleSelectImage = (image: Image) => {
    setSelectedImage(image);
  };

  const handleFavouriteToggle = (image: Image) => {
    const updatedImages = images.map((img) => {
      if (img.id === image.id) {
        return { ...img, favorited: !img.favorited };
      } else {
        return img;
      }
    });
    setImages(updatedImages);
  };

  const handleDelete = (image: Image) => {
    const newImages = images.filter((img) => img.id !== image.id);
    setImages(newImages);
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
       <GlobalStyle />
      <Tabs>
        <h1>Photos</h1>
        <TabListStyle>
          <StyledTab>Recently Added</StyledTab>
          <StyledTab>Favorites</StyledTab>
        </TabListStyle>

        <TabPanel>
          <RecentlyAdded images={images} onSelectImage={handleSelectImage} />
        </TabPanel>

        <TabPanel>
          <Favorited images={images} onSelectImage={handleSelectImage} />
        </TabPanel>
      </Tabs>

      <SelectedImage
        image={selectedImage}
        onFavouriteToggle={handleFavouriteToggle}
        onDelete={handleDelete}
      />
    </GalleryContainer>
  );
};
export default App;
