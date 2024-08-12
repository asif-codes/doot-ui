import { GrPin } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

const PinnedMessage = () => {
  return (
    <div className=" flex h-[30px] bg-[#fff6e0] justify-between">
      <div className="flex justify-center align-middle">
        <div className="pt-[7px] pr-[5px]   ">
          <GrPin style={{}} className="text-yellow-700" />
        </div>
        <div className="text-yellow-700 pt-[5px] pr-2">10 Pinned</div>
        <div className="text-yellow-700 pt-[5px] pr-2">|</div>
        <div className="text-yellow-700 pt-[5px] pr-9">+</div>
      </div>
      <div>
        <RxCross2
          style={{
            fontSize: "25px",
          }}
          className="text-yellow-700 pt-[5px]"
        />
      </div>
    </div>
  );
};

export default PinnedMessage;
