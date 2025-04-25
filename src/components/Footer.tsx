import moment from "moment";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex justify-between space-x-2">
      <p className="text-xs">
        Nenad Kaevik &copy; {moment(new Date()).year()} All rights reserved
      </p>
      <div className="flex space-x-4">
        <Link
          className="hover:text-blue-500"
          href="https://www.linkedin.com/in/nenadkaevik/"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="hover:text-blue-500"
          href="https://instagram.com/nenad.kaevik"
        >
          <FaInstagram />
        </Link>
        <Link
          className="hover:text-blue-500"
          href="https://github.com/NenadKaevik"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};
