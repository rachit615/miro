import Image from "next/image";
import Logo from "/public/logo.svg";
export const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center border border-black">
      <Image
        src={Logo}
        alt="logo"
        width={"120"}
        height={"120"}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
