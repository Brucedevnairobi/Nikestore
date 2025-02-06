import  Button  from "../components/Button";
import  arrowRight  from "../assets/icons/arrow-right.svg";
const Hero = () => (
  <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="font-montserrat text-coral-red text-xl">
        Our Summer Collections
      </p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
        </span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
        Discover Stylish Nike Arrivals, Quality Comfort, and Innovation for Your
        Active Life
      </p>

      <Button label="Shop Now" iconURL={arrowRight} />
    </div>
  </section>
);

export default Hero;
