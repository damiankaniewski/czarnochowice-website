export const metadata = {
  title: "Czarnochowice",
  description: "Czarnochowice domy na sprzedaż"
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </head>
  );
}
