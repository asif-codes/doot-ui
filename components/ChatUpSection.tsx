import { FiPlusSquare } from "react-icons/fi";
import { Input } from "./ui/input";

const ChatUpSection = () => {
  return (
    <div className="pt-6 px-6 mb-[38px]">
      <div className="flex items-start">
        <div className="flex-grow">
          <h4
            style={{
              fontSize: "1.3125rem",
            }}
            className="mb-4"
          >
            Chats
          </h4>
        </div>
        <div className="flex-shrink-0">
          <div className="cursor-pointer">
            <button
              style={{
                borderColor: "#0000",
                border: "1px solid #0000",
                borderRadius: "0.2rem",
                fontSize: "25px",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
              className="bg-[#edf7f0] hover:bg-[rgb(78,172,109)] inline-block text-center align-middle"
            >
              <FiPlusSquare />
            </button>
          </div>
        </div>
      </div>
      <div id="search">
        <Input placeholder="Search here" className="mb-3" />

        {/* <IoIosSearch className="relative z-[2]" /> */}
      </div>
    </div>
  );
};

export default ChatUpSection;
