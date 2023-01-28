import clsx from "clsx";

export const Message = ({ content, user, time, author }) => {
  return (
    <div
      className={clsx("flex max-w-[80%] flex-col items-start gap-[10px]", {
        "self-end": user,
      })}
    >
      <p
        className={clsx("text-[12px] font-normal", {
          "self-end": user,
        })}
      >
        {author} - {time}
      </p>
      <div
        className={clsx("rounded-[6px] rounded-tl-none bg-[#633BBC] p-[14px]", {
          "rounded-[6px] rounded-tl-[6px] rounded-br-none bg-[#07847E]": user,
        })}
      >
        <p className="text-[12px] font-normal">{content}</p>
      </div>
    </div>
  );
};
