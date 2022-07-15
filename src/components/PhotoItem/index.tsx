import * as C from "./style";
import { DeletePhoto } from "../DeletePhoto/index";
import {Photo} from "../../types/Photo"

type Props = {
  name: string;
  url: string;
  setPhotos: (photo: Photo[]) => void;
  setSelectedPhoto: (selectedPhotos: string) => void;
};

export const PhotoItem = ({ name, url, setSelectedPhoto, setPhotos }: Props) => {
  return (
    <C.Container>
      <img id="photo" src={url} alt={name} onClick={() =>{setSelectedPhoto(url)}}/>
      <DeletePhoto name={name} setPhotos={setPhotos}/>
    </C.Container>
  );
};
