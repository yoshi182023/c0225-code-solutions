type Props = {
  text: string;
};

export function Description(props: Props) {
  const { text } = props;
  return <p>{text}</p>;
}
