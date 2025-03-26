import './Image.css';

interface ImageProps {
  imageSrc: string;
}

export function Image({ imageSrc }: ImageProps) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        {/* <img className="image-fill" src="/starry-sky.jpeg" alt="space-image" /> */}
        <img className="image-fill" src={imageSrc} alt="space-image" />
      </div>
    </div>
  );
}
