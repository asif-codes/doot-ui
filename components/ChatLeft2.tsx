import Image from "next/image";

const ChatLeft2 = () => {
  return (
    <div className="chat-left flex justify-start mt-7 h-[50px]">
      <div className="flex flex-col text-center pt-[10px] mr-[20px] justify-between">
        <div className="flex ml-[59px]">
          <Image
            src="/image1.jpg"
            width={150}
            height={150}
            alt="image"
            className="mr-[15px]"
          />
          <Image src="/image1.jpg" width={150} height={150} alt="image" />
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

export default ChatLeft2;
