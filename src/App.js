import "./App.css";
import SVG from "./assets/SVG.png";
import Rating from "./assets/rating.svg";
import Icon from "./assets/icon.png";
import Frame5 from "./assets/Frame5.png";
import Frame6 from "./assets/Frame6.png";
import Frame7 from "./assets/Frame7.png";
import Award from "./assets/Award.png";
import Facebook from "./assets/facebook.png";
import Linkedin from "./assets/Linkedin.png";
import Twitter from "./assets/twitter.png";
import Instagram from "./assets/Instagram.png";
import logo from "./assets/logo.png";
import Vector from "./components/vector";
import Vector2 from "./components/vector2";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center bg-black shadow-md rounded w-full max-w-md">
        <div className="flex flex-col items-center justify-center w-full px-6 py-[36px] gap-2 font-serif bg-custom-bg bg-cover  ">
          <img
            src={logo}
            alt="certification programme"
            className="w-[68px] h-[28px]"
          />
          <p className="text-white text-[10px] uppercase tracking-[2px] font-[proximanova]">
            Presents
          </p>
        </div>

        <div className="w-full px-6 py-4 gap-[7px] flex flex-col">
          <h1 className="text-2xl text-white font-[rocaone]">
            Professional Online
            <br />
            Makeup Course
          </h1>

          <div className="flex items-center gap-[10px]">
            <div className="flex items-center px-3 py-1 gap-2 bg-white bg-opacity-15 rounded-md">
              <img
                src={SVG}
                alt="certification programme"
                className="w-3 h-3"
              />
              <p className="rounded text-white text-xs font-[proximanova] font-normal">
                Certification Programme
              </p>
            </div>

            <div className="flex items-center gap-1">
              <img src={Rating} alt="Rated" className="w-3 h-3" />
              <p className="text-yellow-400  text-xs font-[proximanova] font-normal ">
                Rated 4.85/5
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <img src={Icon} alt="Icon" className="icon mr-2" />
              <p className="text-white text-sm">
                India's No.1 Online Makeup Course
              </p>
            </div>

            <div className="flex items-center">
              <img src={Icon} alt="Icon" className="icon mr-2" />
              <p className="text-white text-sm">
                Learn by LIVE DO-it-Together Classes
              </p>
            </div>

            <div className="flex items-center">
              <img src={Icon} alt="Icon" className="icon mr-2" />
              <p className="text-white text-sm">
                Unlimited Practise Session to master skills
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-4 flex flex-col">
          <div className="bg-white shadow-md rounded-[10px] overflow-hidden w-full  text-center flex flex-col">
            <div className="text-white w-full text-center bg-[#E84D84] py-[6px]">
              <p className="uppercase font-bold text-xs tracking-wider">
                Fill the form below to enquire
              </p>
            </div>

            <div className="flex flex-col gap-[10px] p-[10px] text-left">
              <label htmlFor="name" className="block text-xs font-semibold">
                *Enter your name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Eg. Aneesha Mehra"
                className="border border-gray-300 p-2 rounded w-full"
              />

              <label htmlFor="whatsapp" className="block text-xs font-semibold">
                *Enter your Whatsapp Number:
              </label>
              <div className="flex space-x-2">
                <select className="border border-gray-300 p-2 rounded">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  name="whatsapp"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Eg-0000000000"
                />
              </div>

              <label
                htmlFor="profession"
                className="block text-xs font-semibold"
              >
                *Select your profession:
              </label>
              <select className="border border-gray-300 text-sm p-2 rounded w-full text-gray-400">
                <option value="" disabled selected>
                  Choose the most relevant option
                </option>
              </select>

              <label htmlFor="goal" className="block text-xs font-semibold">
                *Select your goal:
              </label>
              <select className="border border-gray-300 text-sm p-2 rounded w-full text-gray-400">
                <option value="" disabled selected>
                  Choose the most relevant option
                </option>
              </select>

              <label htmlFor="city" className="block text-xs font-semibold">
                *Select your city:
              </label>
              <select className="border border-gray-300 text-sm p-2 rounded w-full text-gray-400">
                <option value="" disabled selected>
                  Choose the most relevant option
                </option>
              </select>
            </div>
            <div className="p-[10px] w-full">
              <button className="custom-btn-submit bg-gradient-to-br from-[#F56563] to-[#E54988]">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[390px] bg-custom-bg2 bg-cover mt-8 ">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex flex-row justify-center items-center space-x-8">
              <Vector2 />
              <h1 className="text-2xl mb-4 mt-8 text-white text-center font-[rocaone]">
                Why should you
                <br />
                Join Airblack
              </h1>
              <Vector />
            </div>

            <div className="flex items-center space-x-8 mt-[36px]">
              <div className="flex flex-col w-full items-center text-center justify-center gap-2">
                <img src={Frame5} alt="live-on-zoom" className="w-12 h-12" />
                <p className="text-white text-sm">
                  Do-it-together, live on zoom
                </p>
              </div>

              <div className="flex flex-col w-full items-center text-center justify-center gap-2">
                <img src={Frame6} alt="Rated Classes" className="w-12 h-12" />
                <p className="text-white text-sm">4.8/5 Rated Classes</p>
              </div>

              <div className="flex flex-col w-full items-center text-center justify-center gap-2">
                <img src={Frame7} alt="Members" className="w-12 h-12" />
                <p className="text-white text-sm">35000+ Members</p>
              </div>
            </div>

            <button className="custom-btn-submit mt-12 bg-gradient-to-br from-[#F56563] to-[#E54988]">
              Apply Now
            </button>
          </div>
        </div>

        <div className="w-full px-6 py-[30px] gap-[14px]">
          <div className="flex flex-row justify-center items-center w-full">
            <Vector2 />
            <p className="text-2xl text-white text-center font-[rocaone]">
              Get Certified From
              <br /> India's Biggest
              <br /> Beauty Platform
            </p>
            <Vector />
          </div>
          <img src={Award} alt="Award" className="w-[361px] h-[252px]" />
        </div>

        <div className="bg-custom-bg2 bg-cover w-full px-10 py-[60px] flex flex-col gap-6">
          <h1 className="text-3xl text-white h-full font-[rocaone] text-center">
            Join our growing
            <br /> community of
            <br />
            35000+ alumni
          </h1>

          <button className="custom-btn-submit  bg-gradient-to-br from-[#F56563] to-[#E54988]">
            Apply Now
          </button>

          <div className="flex justify-center items-center space-x-4 mx-auto">
            <img
              src={Instagram}
              alt="Instagram"
              className="w-[34px] h-[34px]"
            />
            <img src={Facebook} alt="Facebook" className="w-[34px] h-[34px]" />
            <img src={Linkedin} alt="LinkedIn" className="w-[34px] h-[34px]" />
            <img src={Twitter} alt="Twitter" className="w-[34px] h-[34px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
