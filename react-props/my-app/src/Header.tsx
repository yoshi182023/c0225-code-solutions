type Props = {
  text: string;
};

export function Header(props: Props) {
  const { text } = props;
  return <h1>{text}</h1>;
}
