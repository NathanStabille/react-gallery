import * as C from "./style";

type Props = {
  setSelectedPhoto: (selectedPhoto: string) => void;
  selectedPhoto: string;
};

export const ModalPhoto = ({ selectedPhoto, setSelectedPhoto }: Props) => {
  const handleClick = () => {
    setSelectedPhoto("");
  };

  return (
    <C.Container onClick={handleClick}>
      <img src={selectedPhoto} alt="enlarge pic" />
    </C.Container>
  );
};
