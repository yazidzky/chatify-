import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab ${
          activeTab === "chats"
            ? "bg-green-500/20 text-green-400"
            : "text-slate-400 hover:text-green-300"
        } transition-colors duration-200`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab ${
          activeTab === "contacts"
            ? "bg-green-500/20 text-green-400"
            : "text-slate-400 hover:text-green-300"
        } transition-colors duration-200`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
