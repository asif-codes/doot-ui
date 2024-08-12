import Image from "next/image";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const ChatLeft = () => {
  return (
    <div className="chat-left flex justify-start mt-7 h-[50px]">
      <div className="flex flex-col text-center pt-[10px] mr-[20px] justify-between">
        <div
          style={{
            boxShadow: "0 2px 4px #0f223a1f",
            borderRadius: "3px",
            color: "#495057",
            fontSize: "15px",
          }}
          className="bg-white px-4 py-[12px] ml-[50px]"
        >
          Yeah everything is fine. Our next meeting tomorrow at 10.00 AM
        </div>
        <div className=" flex mt-[3px]">
          <div className="flex icon pt-[20px] justify-around">
            <Image
              style={{
                borderRadius: "50%",
              }}
              src="/avatar2.jpg"
              width={30}
              height={30}
              alt="user"
              className="mr-[25px]"
            />
          </div>
          <div
            className="mt-[20px] pr-[10px] font-bold"
            style={{
              fontSize: "15px",
              color: "#7a7f84",
              fontWeight: "500",
            }}
          >
            Marguerite Campbell{" "}
            <span
              style={{
                fontSize: "11px",
                color: "gray",
              }}
            >
              03.54pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLeft;
