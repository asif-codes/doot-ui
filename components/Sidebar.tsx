import { BiSolidMessageDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div
      style={{
        borderRight: "1px solid #2e2e2e",
      }}
      className=" max-w-[75px] min-h-[570px] min-w-[75px] px-[8px] z-[9] bg-[#2e2e2e] h-[100vw] flex-col "
    >
      <div className="message-bx text-center flex justify-center">
        <a
          style={{
            lineHeight: "70px",
            textDecoration: "none",
            color: "rgba(78,172,109), 1",
          }}
          className="block outline-none cursor-pointer text-center pt-5 pb-5"
        >
          <BiSolidMessageDetail
            style={{
              color: "rgba(78,172,109)",
            }}
            className="h-[30px] w-[30px]"
          />
        </a>
      </div>
      <div className="navigation-menu flex flex-col h-[100%] max-h-[94vh]  justify-between ">
        <div className="n-1">
          <CgProfile
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
          <TiMessages
            style={{
              color: "rgb(78,172,109)",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
          <MdOutlinePeopleAlt
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
          <FiPhoneCall
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
          <IoBookmarksOutline
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
          <IoSettingsOutline
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
        </div>
        <div className="n-2">
          <IoMoonOutline
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "28px",
            }}
            className="my-9 w-full block text-center cursor-pointer"
          />
          <CgProfile
            style={{
              color: "#878a92",
              borderRadius: "0",
              fontSize: "35px",
            }}
            className="my-9 w-full block text-center cursor-pointer mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
