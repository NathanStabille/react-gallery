import { useState } from "react";
import * as C from "./style";
import trashIcon from "../../assets/images/trash.png";
import * as Photos from "../../services/photos";
import { Photo } from "../../types/Photo";

type Props = {
  name: string;
  setPhotos: (photo: Photo[]) => void;
};

export const DeletePhoto = ({ name, setPhotos }: Props) => {
  const [deleteItem, setDeleteItem] = useState(false);

  const handleClick = async () => {
    if (deleteItem) {
      setDeleteItem(false);
      await Photos.deleteItem(name);
      setPhotos(await Photos.getAll());
    }
  };

  return (
    <C.Container>
      <img
        src={trashIcon}
        alt="trash"
        onClick={() => {
          setDeleteItem(true);
        }}
      />

      {deleteItem && (
        <C.DeleteModal>
          <div>
            <h1>Want to delete this item?</h1>
            <div className="buttonModal">
              <button className="yes" onClick={handleClick}>
                Yes
              </button>
              <button
                onClick={() => {
                  setDeleteItem(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </C.DeleteModal>
      )}
    </C.Container>
  );
};
