import Image from "next/image";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const ChatRight2 = () => {
  return (
    <div className="chat-right flex justify-end mt-7 ">
      <div className="flex flex-col text-center pt-[10px] mr-[20px] justify-between backdrop-blur-lg">
        <div className="bg-[#cce2d3] px-4 py-[12px] h-[90px]">
          <div
            style={{
              border: "1px solid #4eac6d",
              borderRadius: "6px",
            }}
            className="flex h-[65px]"
          >
            <div style={{}} className="ml-[15px] mt-[18px]">
              <MdOutlineAttachFile
                style={{
                  fontSize: "23px",
                  color: "rgb(82 174 112)",
                }}
              />
            </div>
            <div className="flex flex-col ml-[15px] mt-[10px]">
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#495057",
                }}
              >
                design-phase-1-approved.pdf
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgb(73 80 87 / 75%)",
                }}
                className="text-left"
              >
                12.5 MB
              </div>
            </div>
            <div className="mt-[22px] pl-[45px]">
              <IoMdDownload
                style={{
                  color: "rgb(106 117 118)",
                  fontSize: "19px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pl-[300px] flex mt-[10px] justify-between">
          <div>
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

export default ChatRight2;
