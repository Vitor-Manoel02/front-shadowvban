import * as s from './styles';

export default function Cards({title, value, description}) {
  return (
    <s.containerCard>
      <h3>{title}</h3>
      <figcaption>{value}</figcaption>
      <figcaption>{description}</figcaption>
    </s.containerCard>
  );
}
