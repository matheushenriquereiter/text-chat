import sendButton from "../assets/sendButton.svg";

export const Input = () => {
  return (
    <div className="mt-[24px] flex justify-between rounded-full bg-[#282843]">
      <input
        className="h-full w-full rounded-full bg-[#282843] px-[24px] py-[14px] text-[12px] placeholder-[#E1E1E6] outline-none"
        placeholder="Digite sua mensagem..."
      />
      <button>
        <img className="pr-[24px]" src={sendButton} alt="Botão de enviar"></img>
      </button>
    </div>
  );
};
