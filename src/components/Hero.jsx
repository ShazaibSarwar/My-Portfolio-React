import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Wellcome to my profile
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[45px] text-white ss:leading-[50.8px] leading-[75px]">
            Hi i'm <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Shazaib Sarwar</span>
          </h2>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[22px] text-white ss:leading-[60.8px] leading-[30px] w-full">
          <span class="type">
            <span>
              <span>Web Developer</span>
              <span>UI/UX Designer</span>
              <span>Web Designer</span>
              <span>Full-stack Developer</span>
              
            </span>
          </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[770px] mt-5`}>
        Software Engineer with 3 years experience in Full Stack
        Development and logical programming. An Inquisitive
        learner and belief in constant improvement. I always
        prefer to work both as an individual and team member to
        boost my knowledge. I am not limited to specific
        technologies but interested in working in rapid software
        development. Working with NodeJS, JavaScript, and
        many more technologies.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
