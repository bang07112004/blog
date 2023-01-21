import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Header({}: Props) {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={""}>
          <img
            src=""
            alt="Logo"
            className="rounded-full"
            width={50}
            height={50}
          />
        </Link>
        <h1>Bang Handsome</h1>
      </div>
      <div className="flex items-center justify-center">
        Contact ME:
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100083708621101"
          className="ml-2"
        />
        <SocialIcon url="https://github.com/bang07112004" className="ml-2" />
      </div>
    </header>
  );
}

export default Header;
