type Props = {
  text: string;
};
export function Description({ text }: Props) {
  //const [textIndex, setTextIndex] = useState(0);

  // function handleClick() {
  //   if (textIndex >= texts.length - 1) {
  //     setTextIndex(0);
  //   } else {
  //     setTextIndex(textIndex + 1);
  //   }
  // }

  return <p>{text}</p>;
}
