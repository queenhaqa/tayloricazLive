import taylorEras from "../assets/images/taylorEras.avif";

export const SiteBanner = () => {
  return (
    <div className="h-[40vh] w-full shrink-0 relative">
      <div className="italic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none text-yellow-900 font-bold text-5xl z-40 px-[20vw] py-2 bg-violet-100/75 ">
        TAYLORICAZ
        <span className="text-sm whitespace-nowrap">by Ori and Yarden</span>
      </div>
      <img alt="taylor-eras" className="absolute h-[40vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={taylorEras} />
    </div>
  );
};
