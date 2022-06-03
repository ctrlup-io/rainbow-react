import Title from ".";

export default {
  component: Title,
  title: Title.name,
};

export const WithStain = () => (
  <>
    {Array.from({ length: 4 }, (v, k) => (
      <Title label="Ctrl Up, une ESN singulière" stainIndex={k} key={k} />
    ))}
  </>
);
