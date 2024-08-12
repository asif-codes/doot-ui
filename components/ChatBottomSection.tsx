import { FiPlusSquare } from "react-icons/fi";
import ChatList1 from "./ChatList1";
import ChatList2 from "./ChatList2";
import List3 from "./List3";

const ChatBottomSection = () => {
  return (
    <>
      <div>
        <h5
          style={{
            fontSize: "11px",
            color: "#495057bf",
          }}
          className="mb-3 px-4 mt-4 uppercase pr-3"
        >
          Favourites
        </h5>
        <ChatList1 />
      </div>
      <div className="pt-10 px-6 ">
        <div className="flex items-start">
          <div className="flex-grow">
            <h4
              style={{
                fontSize: "11px",
                color: "rgb(73 80 87 / 75%) !important",
              }}
              className="mb-4 align-middle uppercase"
            >
              Direct Messages
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
      </div>
      <ChatList2 />
      <div className="pt-10 px-6 ">
        <div className="flex items-start">
          <div className="flex-grow">
            <h4
              style={{
                fontSize: "11px",
                color: "rgb(73 80 87 / 75%) !important",
              }}
              className="mb-4 align-middle uppercase"
            >
              Channels
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
      </div>
      <List3 />
      <h5
        style={{
          fontSize: "11px",
          color: "rgb(78,172,109)",
        }}
        className="text-center mt-2 mb-2"
      >
        Archived contacts
      </h5>
    </>
  );
};

export default ChatBottomSection;
