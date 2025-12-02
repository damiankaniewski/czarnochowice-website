export const metadata = {
  title: "Czarnochowice",
  description: "Czarnochowice domy na sprzedaż",
  image: "/czarnochowicelogo.png",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image}/>
    </head>
  );
}
