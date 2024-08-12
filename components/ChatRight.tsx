import Image from "next/image";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const ChatRight = () => {
  return (
    <div className="chat-right flex justify-end mt-7 h-[50px]">
      <div className="flex flex-col text-center pt-[10px] mr-[20px] justify-between backdrop-blur-lg">
        <div
          style={{
            color: "#495057",
            fontSize: "15px",
          }}
          className="bg-[#cce2d3] px-4 py-[12px]"
        >
          Good morning, How are you? What about our next meeting?
        </div>
        <div className="pl-[300px] flex mt-[10px] justify-between">
          <div className="text-right ">
            <IoCheckmarkDoneOutline
              style={{
                color: "#06d6a0",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#6a7576",
              fontWeight: "500",
            }}
            className="font-bold"
          >
            3:54pm You
          </div>
        </div>
      </div>
      <div className="icon pt-[20px]">
        <Image
          style={{
            borderRadius: "50%",
          }}
          src="/avatar2.jpg"
          width={30}
          height={30}
          alt="user"
        />
      </div>
    </div>
  );
};

export default ChatRight;
