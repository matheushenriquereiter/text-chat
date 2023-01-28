import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Message } from "./components/Message";
import { messages } from "./data/messages";

export const App = () => {
  return (
    <div className="flex h-screen justify-center bg-[#1A1924]">
      <div className="flex h-full w-full max-w-[1280px] flex-col rounded-lg bg-[#1A1924] px-[32px] py-[24px] text-[#E1E1E6] sm:px-[72px] sm:py-[32px]">
        <Header />
        <div className="flex flex-1 flex-col gap-[30px] overflow-hidden overflow-y-scroll">
          {messages.map((message, index) => {
            return (
              <Message
                key={index}
                content={message.content}
                author={message.author}
                time={message.time}
                user={message.user}
              />
            );
          })}
        </div>
        <Input />
      </div>
    </div>
  );
};
