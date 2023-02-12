import styles from "../style";
import { discount, herologo  } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row h-screen flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] ss:leading-[100.8px] leading-[65px]">
            Software Development <br className="sm:block hidden " />{" "}
            {/* <span className="text-white">And</span> */}
            <span className="text-gradient">And</span>
          </h1>
          <div className="invisible">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[45px] text-white ss:leading-[100.8px] leading-[65px] w-full">
          Automation.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses advance technoogies to boost up your business technology needs.
        </p>
      </div>

      <div className={`hidden md:block ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={herologo} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
