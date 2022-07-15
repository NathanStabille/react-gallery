import { useState, FormEvent } from "react";
import * as C from "./style";
import * as Photos from "../../services/photos";
import { Photo } from "../../types/Photo";

type Props = {
  photos: Photo[];
  setPhotos: (photos: Photo[]) => void;
};

export const UploadForm = ({ photos, setPhotos }: Props) => {
  const [uploadPhoto, setUploadPhoto] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploadPhoto(true);
      let result = await Photos.insert(file);
      setUploadPhoto(false);

      if (result instanceof Error) {
        alert("Archive not supported, send images types [jpeg, jpg, png, gif]");
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);

        setPhotos(newPhotoList);
      }
    }
  };

  return (
    <C.Container>
      <C.FormArea method="POST" onSubmit={handleFormSubmit}>
        <label className="bn31">
          <span className="bn31span">
            <input id="inputFile" type="file" name="image" />
            <span id="spanSymbol">+</span>
          </span>
        </label>
        <button className="bn632-hover bn18" type="submit" value="Upload">
          SEND
        </button>
        {uploadPhoto && "Loading image..."}
      </C.FormArea>
    </C.Container>
  );
};
