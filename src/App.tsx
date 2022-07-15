import { useState, useEffect } from "react";
import * as C from "./App.style";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem/index";
import { ModalPhoto } from "./components/ModalPhoto/index";
import { UploadForm } from "./components/UploadForm/index";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };

    getPhotos();
  }, []);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Gallery of Photos</C.Header>
        <UploadForm photos={photos} setPhotos={setPhotos} />
        {loading && (
          <C.ScreenWarning>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>Loading...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => {
              return (
                <PhotoItem
                  key={index}
                  name={item.name}
                  url={item.url}
                  setPhotos={setPhotos}
                  setSelectedPhoto={setSelectedPhoto}
                />
              );
            })}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div>No registered images!</div>
          </C.ScreenWarning>
        )}
      </C.Area>
      {selectedPhoto && (
        <ModalPhoto
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        ></ModalPhoto>
      )}
    </C.Container>
  );
}

export default App;
