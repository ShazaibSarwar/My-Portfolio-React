import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="https://drive.google.com/file/d/1A6w-LHo-_l6EzUYL08FzOSMzhCRrQskB/view?usp=sharing">
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Download</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">My Resume</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
