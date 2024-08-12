import Image from "next/image";

const ChatList1 = () => {
  return (
    <div id="chat-list">
      <div className="flex pl-6 py-2 bg-[rgb(78,172,109)]">
        <Image
          style={{ borderRadius: "50%" }}
          width="27"
          height="27"
          src="/avatar1.jpg"
          alt="user"
          className=""
        />
        <span
          style={{
            fontSize: "14px",
          }}
          className="text-white pl-[5px] pt-[0.25rem]"
        >
          Asif Hossain
        </span>
      </div>
      <div className="flex pl-6 py-2 ">
        <Image
          style={{ borderRadius: "50%" }}
          width="27"
          height="27"
          src="/avatar1.jpg"
          alt="user"
          className=""
        />
        <span
          style={{
            fontSize: "14px",
          }}
          className="text-[#495057] pl-[5px] pt-[0.25rem]"
        >
          Asif Hossain
        </span>
      </div>
      <div className="flex pl-6 py-2 ">
        <Image
          style={{ borderRadius: "50%" }}
          width="27"
          height="27"
          src="/avatar1.jpg"
          alt="user"
          className=""
        />
        <span
          style={{
            fontSize: "14px",
          }}
          className="text-[#495057] pl-[5px] pt-[0.25rem]"
        >
          Asif Hossain
        </span>
      </div>
      <div className="flex pl-6 py-2 ">
        <Image
          style={{ borderRadius: "50%" }}
          width="27"
          height="27"
          src="/avatar1.jpg"
          alt="user"
          className=""
        />
        <span
          style={{
            fontSize: "14px",
          }}
          className="text-[#495057] pl-[5px] pt-[0.25rem]"
        >
          Asif Hossain
        </span>
      </div>
    </div>
  );
};

export default ChatList1;
