import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { TiMicrophoneOutline } from "react-icons/ti";
import { LuSendHorizonal } from "react-icons/lu";
import { Button } from "./ui/button";

const SendBar = () => {
  return (
    <div className="flex mt-[70px] bg-[#f3f3f3] pl-[30px]">
      <div className="flex mt-[12px] mr-[10px]">
        <BiDotsHorizontalRounded
          style={{
            fontSize: "20px",
            color: "gray",
          }}
        />
        <FaRegSmile
          style={{
            fontSize: "20px",
            color: "gray",
          }}
          className="ml-[20px]"
        />
      </div>
      <Input
        placeholder="Type your message..."
        style={{
          color: "#495057",
        }}
        className="max-w-[67vw]"
      />
      <div className="flex mt-[4px] justify-between ml-[30px]">
        <TiMicrophoneOutline
          style={{
            fontSize: "25px",
            color: "gray",
          }}
          className="mr-[5px] mt-[4px]"
        />
        <Button className="bg-[#4eac6d] hover:bg-[#4eac6d] pb-3">
          <LuSendHorizonal
            style={{
              fontSize: "25px",
              color: "white",
            }}
            className="ml-[20px] "
          />
        </Button>
      </div>
    </div>
  );
};

export default SendBar;
