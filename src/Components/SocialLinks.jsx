import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    // {
    //   id: 1,
    //   child: (
    //     <>
    //       LinkedIn <FaLinkedin size={30} />
    //     </>
    //   ),
    //   href: "https://linkedin.com/in/oku-akpabio-08baaa222",
    //   style: "rounded-tr-md",
    // },
    {
      id: 2,
      child: (
        <>
          Whatsapp <FaWhatsapp size={25} />
        </>
      ),
      href: "https://wa.me/+2348141225457",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:mozzentagroup@gmail.com",
      style: "rounded-br-md",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: `https://firebasestorage.googleapis.com/v0/b/universe-ff7ed.appspot.com/o/Private%2Fcv.png?alt=media&token=546740af-d230-4a7c-a7d3-597825de4b49`,
    //   style: "rounded-br-md",
    // },
  ];

  return (
    <div className=" z-50 relative">

    <div className="hidden lg:flex flex-col  z-50 bottom-[10%] left-3 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
          key={id}
            className={
              "flex justify-between items-center w-52 h-16 px-4 ml-[-100px]  z-50 hover:ml-[-10px] hover:rounded-md duration-300 bg-[#28af60]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
              >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col top-[65%]  z-50 left-0 fixed md:hidden">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
          key={id}
            className={
              "flex justify-between items-center w-40 h-14  z-50 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#28af60]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
              >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SocialLinks;
