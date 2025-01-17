import ChatLeftSideBar from "@/components/ChatLeftSideBar";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatLeftSideBar />
      <MainContent />
    </div>
  );
}
