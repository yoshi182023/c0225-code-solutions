type Props = {
  captions: string;
};
export function Caption({ caption }: Props) {
  //const [imageIndex, setImageIndex] = useState(0);

  // function handleClick() {
  //   if (imageIndex >= captions.length - 1) {
  //     setImageIndex(0);
  //   } else {
  //     setImageIndex(imageIndex + 1);
  //   }
  // }

  return <h3>{caption}</h3>;
}
