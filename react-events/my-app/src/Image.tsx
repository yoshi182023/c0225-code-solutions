import './Image.css';

type Props = {
  src: string;
};
export function Image({ src }: Props) {
  // const [imageIndex, setImageIndex] = useState(0);

  // function handleClick() {
  //   if (imageIndex >= srcs.length - 1) {
  //     setImageIndex(0);
  //   } else {
  //     setImageIndex(imageIndex + 1);
  //   }
  // }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          //onClick={handleClick}
          className="image-fill"
          src={src}
          alt="space-image"
        />
      </div>
    </div>
  );
}
