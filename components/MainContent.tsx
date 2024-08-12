import ChatBar from "./ChatBar";
import ChatLeft from "./ChatLeft";
import ChatLeft2 from "./ChatLeft2";
import ChatRight from "./ChatRight";
import ChatRight2 from "./ChatRight2";
import PinnedMessage from "./PinnedMessage";
import SendBar from "./SendBar";

const MainContent = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png)",
      }}
      id="container"
      className="w-full bg-[#f2f2f2]"
    >
      <div className="p-[24px] w-full">
        <ChatBar />
        <PinnedMessage />
        <ChatRight />
        <ChatLeft />
        <div className="mt-[70px]">
          <ChatLeft />
        </div>
        <div className="mt-[70px]">
          <ChatRight />
        </div>
        <div className="mt-[30px]">
          <ChatLeft2 />
        </div>
        <div className="mt-[98px]">
          <ChatRight2 />
        </div>
        <SendBar />
      </div>
    </div>
  );
};

export default MainContent;
