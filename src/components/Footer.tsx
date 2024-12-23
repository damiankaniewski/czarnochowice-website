import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-full flex flex-col ">
        <div className="flex flex-row bg-green3 justify-between p-5">
          <div className="flex flex-row justify-center items-center">
            <Link
              href="https://www.n20.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src="/n20logo.png"
                alt="N20"
                width={212}
                height={144}
                className="p-2"
              />
            </Link>
            <Link
              href="https://www.n20.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src="/logo.png"
                alt="N20"
                width={144}
                height={144}
                className="p-2"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center h-full items-center">
            <div className="flex flex-row h-full w-full">
              <Link
                href="https://www.facebook.com/N20RealEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image
                  src="/Facebook_icon.png"
                  alt="Facebook"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://www.instagram.com/n20_nieruchomosci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image
                  src="/Instagram_icon.png"
                  alt="Instagram"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            <Link
              href="https://www.n20.pl/polityka-prywatnosci"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full p-2 text-center text-lg mt-5"
            >
              Polityka Prywatności
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center py-1 px-2 bg-signature text-white">
          <p className="my-4">2024 Policrafts ©</p>
          <div className="pr-5">
            <p className="text-signature_text text-right p-0 m-0">
              Wizualizacje: Maciej Krzyszkowski
            </p>
            <p className="text-signature_text text-right p-0 m-0">
              Realizacja witryny: Rafał Ciupek
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
