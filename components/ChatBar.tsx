import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiVideoCameraLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

const ChatBar = () => {
  return (
    <div
      style={
        {
          // backdropFilter: "blur(75px)",
        }
      }
      className="m-4 flex max-w-full justify-between backdrop-blur-sm"
    >
      <div className="name-icon flex items-center">
        <Image
          style={{
            borderRadius: "50%",
          }}
          src="/avatar1.jpg"
          alt="user"
          width={38}
          height={38}
        />
        <div className="flex flex-col ml-3">
          <div className="font-bold">Marguerite Campbell</div>
          <div
            style={{
              fontSize: "12px",
            }}
          >
            Active
          </div>
        </div>
      </div>
      <div className="icons flex w-[10vw] justify-between cursor-pointer">
        <IoSearchOutline
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        />
        <PiPhoneCallLight
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        />
        <PiVideoCameraLight
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        />
        <BsInfoCircle
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        />
        <CiMenuKebab
          style={{
            fontSize: "22px",
            color: "gray",
          }}
        />
      </div>
    </div>
  );
};

export default ChatBar;
