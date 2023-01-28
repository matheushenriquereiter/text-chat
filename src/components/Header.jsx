import contactImage from "../assets/contactImage.jpg";
import closeButton from "../assets/closeButton.svg";
import onlineCircle from "../assets/onlineCircle.svg";

export const Header = () => {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <div className="flex justify-between gap-[16px]">
        <div className="flex gap-[16px]">
          <img
            className="h-[48px] w-[48px] rotate-90 rounded-full"
            src={contactImage}
            alt="Foto do perfil"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[16px] font-bold">Mortadela</h1>
            <p className="flex gap-[4px] text-[12px] text-[#00B37E]">
              <img src={onlineCircle}></img>Online
            </p>
          </div>
        </div>
        <button>
          <img src={closeButton} alt="Botão de fechar"></img>
        </button>
      </div>
      <p className="self-center pb-[4px] text-[12px]">Hoje 11:30</p>
    </div>
  );
};
