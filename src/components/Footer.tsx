import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-full flex flex-col ">
        <div className="flex flex-row bg-green3 justify-between p-5">
          <div className="flex flex-row justify-start">
            <Link
              href="https://www.n20.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-8"
            >
              <Image src="/n20logo.png" alt="N20" width={192} height={120} />
            </Link>
            <Link href="https://www.n20.pl/">
              {" "}
              <Image src="/logo.png" alt="N20" width={120} height={120} />
            </Link>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex flex-row">
              <Link href="https://www.facebook.com/N20RealEstate">
                <Image
                  src="/Facebook_icon.png"
                  alt="Facebook"
                  width={80}
                  height={80}
                />
              </Link>
              <Link href="https://www.instagram.com/n20_nieruchomosci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <Image
                  src="/Instagram_icon.png"
                  alt="Instagram"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            <Link href="https://www.n20.pl/polityka-prywatnosci">
              Polityka Prywatności
            </Link>
          </div>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </footer>
  );
}
