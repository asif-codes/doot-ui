import { FiPlusSquare } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Input } from "./ui/input";
import ChatUpSection from "./ChatUpSection";
import ChatBottomSection from "./ChatBottomSection";

const ChatLeftSideBar = () => {
  return (
    <div
      style={{
        boxShadow: "0 2px 4px #0f223a1f",
      }}
      className="h-[100vh] max-w-[300px] min-w-[300px] bg-[#fff] relative"
    >
      <ChatUpSection />
      <ChatBottomSection />
    </div>
  );
};

export default ChatLeftSideBar;
