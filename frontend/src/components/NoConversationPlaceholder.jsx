import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-green-400/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
        <MessageCircleIcon className="size-10 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
      </div>
      <h3 className="text-xl font-semibold text-slate-100 mb-2 drop-shadow-[0_0_4px_rgba(74,222,128,0.5)]">
        Select a conversation
      </h3>
      <p className="text-slate-300 max-w-md">
        Choose a contact from the sidebar to start chatting or continue a
        previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
