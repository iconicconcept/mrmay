import Header from "../myComponent/header";
import { useEffect, useState, type ChangeEvent } from "react";
import { projectCardDetails } from "../myComponent/data";
import {
  ArrowRight,
  Code,
  Facebook,
  FolderGit,
  Github,
  GlobeIcon,
  NetworkIcon,
  Send,
  Twitter,
  Linkedin,
  Lock,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import toast from "react-hot-toast";
import { useDarkMode } from "../context/DarkModeContext";

interface Text {
  text: string;
}

const Home = ({ text }: Text) => {
  const { isDark } = useDarkMode();
  const [name, setName] = useState<string>("");
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  useEffect(() => {
    setDisplayedText("");
    if (!text) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);
        return;
      }
      setDisplayedText((prev) => prev + (text[index] ?? ""));
      index++;
    }, 29);

    return () => clearInterval(interval);
  }, [text]);

  const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !senderEmail.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      toast.error("Please fill all fields.");
      return;
    }
    setloading(true);

    try {
      const mailtoSubject = encodeURIComponent(subject);
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nFrom: ${senderEmail}\n\nMessage:\n${message}`,
      );
      const recipientEmail = "mubaraqadeniyi159@gmail.com";
      const mailtoLink = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
      window.location.href = mailtoLink;
      setName("");
      setMessage("");
      setSenderEmail("");
      setSubject("");
    } catch (error) {
      console.error("Error constructing or navigating to mailto link:", error);
      toast.error("Could not open your gmail.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <section
        className={`w-full h-max md:h-[100vh] lg:h-[100vh] transition-colors duration-300 ${
          isDark ? "bg-emerald-950" : "bg-green-50"
        }`}
        id="Home"
      >
        <div className="relative items-start md:items-center justify-start md:justify-center w-full h-full flex flex-col px-5 md:px-20 lg:px-20 pt-15 pb-5 md:pt-0 lg:pt-0 md:pb-10 lg:pb-10">
          <div className="absolute top-0 left-0 z-0 w-[100%] h-[100%] overflow-hidden">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <Header />
          <div className="grid mt-12 md:mt-0 lg:mt-20 items-start gap-12 md:gap-0 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-auto md:h-auto lg:h-auto">
            <div className="flex flex-col items-start gap-5 text-start">
              <div
                className={`inline-flex items-center gap-3 rounded-full border px-3 py-2 transition-colors duration-300 ${
                  isDark
                    ? "bg-emerald-950/80 border-emerald-700"
                    : "bg-green-100 border-green-200"
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <span
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isDark ? "text-green-200" : "text-green-800"
                  }`}
                >
                  Website developer
                </span>
              </div>
              <h1
                className={`text-6xl md:text-7xl lg:text-8xl flex flex-col font-bold leading-tight transition-colors duration-300 ${
                  isDark ? "text-slate-100" : "text-black"
                }`}
              >
                <span className="text-2xl md:text-3xl lg:text-3xl font-medium">
                  Hi, I'm
                </span>
                <span
                  className={`text-4xl md:text-6xl lg:text-6xl font-extrabold ${
                    isDark ? "text-green-300" : "text-green-900"
                  }`}
                >
                  Mubaraq Allamalyekeen
                </span>
              </h1>
              <p
                className={`text-xl md:text-xl lg:text-xl leading-relaxed max-w-2xl transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {displayedText}
              </p>
              <div className="flex w-max flex-row gap-3">
                <a
                  href="/Mubaraq-Resume.pdf"
                  download="Mubaraq's Resume"
                  className={`px-5 text-white py-3 rounded-[7px] font-semibold text-base md:text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 ${
                    isDark
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-green-800 hover:bg-green-600"
                  }`}
                >
                  Check Resume
                </a>
                <button
                  className={`px-5 text-white py-3 rounded-[7px] font-semibold cursor-pointer text-base md:text-lg transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-green-500 hover:bg-green-400"
                      : "bg-green-500 hover:bg-green-400"
                  }`}
                >
                  <Link to="Contact" smooth={true} duration={500}>
                    Contact Me
                  </Link>
                </button>
              </div>
            </div>
            <div
              className={`flex justify-center items-center md:ml-12 lg:ml-12 transition-colors duration-300`}
            >
              <div
                className={`h-74 w-64 border-2 rounded-2xl flex justify-center items-center transition-colors duration-300 ${
                  isDark
                    ? "border-emerald-700 bg-emerald-950"
                    : "border-green-500"
                }`}
              >
                <div
                  className={`h-70 w-60 rounded-2xl transition-colors duration-300 ${
                    isDark ? "bg-emerald-900" : "bg-green-200"
                  }`}
                >
                  <img
                    src="/Mubaraq-shot.jpg"
                    className="h-full w-full rounded-2xl"
                    alt="Profile"
                  />
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center items-center md:ml-12 lg:ml-12">
              <div className="profile-image-container">
                <img
                  src="/user.jpg"
                  className="z-2 relative h-[97%] w-[97%] rounded-2xl"
                  alt="Profile"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* `second section` */}
      <section
        className={`w-full h-max transition-colors duration-300 ${
          isDark ? "bg-emerald-950" : "bg-green-100"
        }`}
        id="About"
      >
        <div className="px-5 flex flex-col gap-10 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10">
          <div className="flex flex-col gap-2 justify-center items-center text-center py-3">
            <h1
              className={`text-2xl font-bold underline underline-offset-6 transition-colors duration-300 ${
                isDark ? "text-green-400" : "text-emerald-950"
              }`}
            >
              About Me
            </h1>
            <p
              className={`text-[17px] font-normal md:max-w-4xl lg:max-w-4xl transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-emerald-950"
              }`}
            >
              I'm a passionate and versatile Full-Stack Developer with a strong
              focus on {""}{" "}
              <span className="font-medium">Frontend development</span> {""}
              crafting high quality, scalable, and engaging user interfaces.
              Over the past year, I've honed my skills building real-world web
              solutions from dynamic and scalable landing pages to fully
              functional web applications.
            </p>
          </div>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div
              className={`px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg shadow-2xl border transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-950 border-emerald-700"
                  : "border-green-300"
              }`}
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-3 items-center justify-center">
                <div
                  className={`rounded-full p-3 w-max transition-colors duration-300 ${
                    isDark ? "bg-green-600" : "bg-emerald-900"
                  }`}
                >
                  <Code
                    className={`size-5 ${
                      isDark ? "text-green-200" : "text-green-200"
                    }`}
                  />
                </div>
                <h1
                  className={`text-2xl font-semibold text-center transition-colors duration-300 ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  Full-Stack Development
                </h1>
                <p
                  className={`text-[17px] text-center transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Building Responsive and scalable full-stack application
                </p>
              </div>
            </div>

            <div
              className={`px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg shadow-2xl border transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-950 border-emerald-700"
                  : "border-green-300"
              }`}
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-3 items-center justify-center">
                <div
                  className={`rounded-full p-3 w-max transition-colors duration-300 ${
                    isDark ? "bg-green-600" : "bg-emerald-900"
                  }`}
                >
                  <GlobeIcon
                    className={`size-5 ${
                      isDark ? "text-green-200" : "text-green-200"
                    }`}
                  />
                </div>
                <h1
                  className={`text-2xl font-semibold text-center transition-colors duration-300 ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  Web Application
                </h1>
                <p
                  className={`text-[17px] text-center transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Building Responsible and user-friendly web applications with
                  modern Technologies
                </p>
              </div>
            </div>

            <div
              className={`px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg shadow-2xl border transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-950 border-emerald-700"
                  : "border-green-300"
              }`}
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-4 items-center justify-center">
                <div
                  className={`rounded-full p-3 w-max transition-colors duration-300 ${
                    isDark ? "bg-green-600" : "bg-emerald-900"
                  }`}
                >
                  <NetworkIcon
                    className={`size-5 ${
                      isDark ? "text-green-200" : "text-green-200"
                    }`}
                  />
                </div>
                <h1
                  className={`text-2xl font-semibold text-center transition-colors duration-300 ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  Problem Solving
                </h1>
                <p
                  className={`text-[17px] text-center transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Building solutions dedicated to solve complex technical
                  challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section
        className={`w-full h-max transition-colors duration-300 ${
          isDark ? "bg-emerald-950" : "bg-green-600"
        }`}
        id="Projects"
      >
        <div className="px-5 flex flex-col gap-7 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center py-3">
            <h1 className="text-2xl font-bold text-white underline underline-offset-8">
              Featured Projects
            </h1>
            <p className="text-[16px] font-normal text-white md:max-w-4xl lg:max-w-4xl leading-5">
              Here are some past projects I've worked on, to show case my skill.
            </p>
          </div>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectCardDetails.map((item) => (
              <div key={item.id}>
                <div
                  className={`border h-max md:h-93 lg:h-93 px-5 py-6 flex flex-col justify-between rounded-r rounded-b-lg transition-colors duration-300 ${
                    isDark ? "bg-emerald-950 border-emerald-700" : "bg-white"
                  }`}
                  data-aos="fade-up"
                >
                  {/* <div className="w-full cover h-20"> */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-35 object-cover border-3 rounded border-green-600"
                  />
                  {/* </div> */}
                  <div className="flex flex-col gap-2 mt-2">
                    <h1
                      className={`font-semibold text-2xl transition-colors duration-300 ${
                        isDark ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      {item.head}
                    </h1>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item.parag}
                    </p>
                    <div className="flex gap-2 text-center justify-start mt-1">
                      <p
                        className={`px-2 py-0.5 text-[12px] font-medium rounded-sm transition-colors duration-300 ${
                          isDark
                            ? "bg-green-600 text-slate-100"
                            : "bg-green-300 text-emerald-950"
                        }`}
                      >
                        {item.stack}
                      </p>
                      <p
                        className={`px-2 py-0.5 text-[12px] font-medium rounded-sm transition-colors duration-300 ${
                          isDark
                            ? "bg-green-600 text-slate-100"
                            : "bg-green-300 text-emerald-950"
                        }`}
                      >
                        {item.stack2}
                      </p>
                      <p
                        className={`px-2 py-0.5 text-[12px] font-medium rounded-sm transition-colors duration-300 ${
                          isDark
                            ? "bg-green-600 text-slate-100"
                            : "bg-green-300 text-emerald-950"
                        }`}
                      >
                        {item.stack3}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {item.lock === "all" ? (
                        <button
                          onClick={() => toast("Client undisclosed project")}
                          className={`px-5 rounded-[8px] font-normal py-2 curosr-pointer text-white transition-all duration-300 hover:scale-105 ${
                            isDark
                              ? "bg-green-600 hover:bg-green-500"
                              : "bg-emerald-950 hover:bg-emerald-900"
                          }`}
                        >
                          <div className="flex gap-2 items-center">
                            <Lock className="size-4 mt-0.5" /> Locked
                          </div>
                        </button>
                      ) : (
                        <>
                          {item.lock === "code" ? (
                            <button
                              onClick={() => toast("Client undisclosed project")}
                              className={`px-5 rounded-[8px] font-normal py-2 curosr-pointer text-white transition-all duration-300 hover:scale-105 ${
                                isDark
                                  ? "bg-green-600 hover:bg-green-500"
                                  : "bg-emerald-950 hover:bg-emerald-900"
                              }`}
                            >
                              <div className="flex gap-2 items-center">
                                <Lock className="size-3 mt-1" /> Locked
                              </div>
                            </button>
                          ) : (
                            <button
                              className={`px-5 rounded-[8px] font-normal py-2 curosr-pointer text-white transition-all duration-300 hover:scale-105 ${
                                isDark
                                  ? "bg-green-600 hover:bg-green-500"
                                  : "bg-emerald-950 hover:bg-emerald-900"
                              }`}
                            >
                              <a
                                href={item.code}
                                target="_blank"
                                rel="noreferrer"
                                className="flex gap-2 items-center"
                              >
                                <FolderGit className="size-3 mt-1" /> Code
                              </a>
                            </button>
                          )}

                          <button
                            className={`px-5 rounded-[8px] font-normal border py-2 curosr-pointer text-white flex items-center gap-1 transition-all duration-300 hover:scale-105 ${
                              isDark
                                ? "bg-green-500 border-green-400 hover:bg-green-400"
                                : "bg-green-600 border-green-600 hover:bg-green-500"
                            }`}
                          >
                            <a
                              href={item.live}
                              target="_blank"
                              rel="noreferrer"
                              className="flex gap-1 items-center"
                            >
                              Live
                              <ArrowRight className="size-4 mt-1" />
                            </a>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* fourth section */}
      <section
        className={`w-full py-7 md:py-10 lg:py-10 px-5 md:px-20 lg:px-20 h-max transition-colors duration-300 ${
          isDark ? "bg-emerald-950" : "bg-green-100"
        }`}
        id="Skills"
      >
        <div
          className={`px-5 flex flex-col gap-7 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10 rounded-2xl transition-colors duration-300 ${
            isDark ? "bg-emerald-950" : "bg-emerald-950"
          }`}
        >
          <div className="flex flex-col gap-3 justify-center items-center text-center py-2">
            <h1 className="text-2xl font-bold text-white underline underline-offset-8">
              Skills & Expertise
            </h1>
            <p className="text-[16px] font-normal text-white md:max-w-4xl lg:max-w-4xl leading-5">
              Over the past year, I've developed expertise in these tools and
              Technologies
            </p>
          </div>

          <div className="gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div
              className={`px-5 py-5 flex flex-col gap-3 rounded-r rounded-b-lg shadow-sm transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-950 shadow-emerald-800"
                  : "shadow-emerald-900"
              }`}
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-2xl font-semibold text-center text-green-500">
                  Frontend Development
                </h1>
                <p
                  className={`text-[16px] text-center transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-white"
                  }`}
                >
                  HTML, CSS, Javascript, Reactjs, Nextjs, Typescript
                </p>
              </div>
            </div>
            <div
              className={`px-5 py-5 flex flex-col gap-3 rounded-r rounded-b-lg shadow-sm transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-950 shadow-emerald-800"
                  : "shadow-emerald-900"
              }`}
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-2xl font-semibold text-center text-green-500">
                  Backend Development
                </h1>
                <p
                  className={`text-[16px] text-center transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-white"
                  }`}
                >
                  NodeJS, Expressjs
                </p>
              </div>
            </div>
            <div
              className={`px-5 py-5 flex flex-col gap-3 rounded-r rounded-b-lg shadow-sm transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-950 shadow-emerald-800"
                  : "shadow-emerald-900"
              }`}
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-2xl font-semibold text-center text-green-500">
                  Database
                </h1>
                <p
                  className={`text-[16px] text-center transition-colors duration-300 ${
                    isDark ? "text-slate-300" : "text-white"
                  }`}
                >
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fifth section */}
      <section
        className={`w-full h-max transition-colors duration-300 ${
          isDark ? "bg-emerald-950" : "bg-green-100"
        }`}
        id="Contact"
      >
        <div className="px-5 flex flex-col gap-7 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10">
          <div
            className={`flex flex-col gap-2 justify-center items-center text-center py-3 transition-colors duration-300 ${
              isDark ? "text-green-400" : "text-emerald-950"
            }`}
          >
            <h1
              className={`text-2xl font-bold underline underline-offset-8 transition-colors duration-300 ${
                isDark ? "text-green-400" : "text-emerald-950"
              }`}
            >
              Get In Touch
            </h1>
            <p
              className={`text-[16px] font-normal md:max-w-4xl lg:max-w-4xl leading-5 transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-emerald-950"
              }`}
            >
              Over the past year, I've developed expertise in these tools and
              technology.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col items-center gap-4">
              <h1
                className={`font-semibold text-[17px] transition-colors duration-300 ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Connect with me
              </h1>
              <div className="flex gap-4">
                <a
                  href="https://x.com/Icon_mubaraq?s=09"
                  target="_blank"
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? "bg-emerald-900 text-emerald-200 hover:bg-emerald-800"
                      : "bg-green-100 border border-green-600 text-green-600 hover:bg-green-200"
                  }`}
                >
                  {" "}
                  <Twitter />{" "}
                </a>
                <a
                  href="https://github.com/iconicconcept"
                  target="_blank"
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? "bg-emerald-900 text-emerald-200 hover:bg-emerald-800"
                      : "bg-green-100 border border-green-600 text-green-600 hover:bg-green-200"
                  }`}
                >
                  {" "}
                  <Github />{" "}
                </a>
                <a
                  href="www.linkedin.com/in/
                  mubaraq-allamalyekeen-102799252
                  "
                  target="_blank"
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? "bg-emerald-900 text-emerald-200 hover:bg-emerald-800"
                      : "bg-green-100 border border-green-600 text-green-600 hover:bg-green-200"
                  }`}
                >
                  {" "}
                  <Linkedin />{" "}
                </a>
                <a
                  href="https://www.facebook.com/mubaraq.adeniyi.79"
                  target="_blank"
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? "bg-emerald-900 text-emerald-200 hover:bg-emerald-800"
                      : "bg-green-100 border border-green-600 text-green-600 hover:bg-green-200"
                  }`}
                >
                  {" "}
                  <Facebook />{" "}
                </a>
              </div>
            </div>

            <div
              className={`flex max-w-4xl w-full rounded-2xl shadow-2xs transition-colors duration-300 ${
                isDark ? "bg-emerald-950" : "bg-green-100"
              }`}
            >
              <form
                className={`flex flex-col gap-4 p-6 md:p-8 lg:p-8 rounded-xl shadow-lg w-full border transition-colors duration-300 ${
                  isDark
                    ? "bg-emerald-950 border-emerald-700"
                    : "bg-white border-green-200"
                }`}
              >
                <h1
                  className={`font-semibold text-[17px] mb-1 transition-colors duration-300 ${
                    isDark ? "text-slate-100" : "text-emerald-900"
                  }`}
                >
                  Send me a Message
                </h1>
                <div className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className={`font-medium transition-colors duration-300 ${
                        isDark ? "text-green-400" : "text-emerald-800"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g John Piper"
                      required
                      className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors duration-300 ${
                        isDark
                          ? "bg-emerald-950 border-emerald-700 text-emerald-100 placeholder-emerald-400"
                          : "border-green-300 text-slate-900"
                      }`}
                      value={name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className={`font-medium transition-colors duration-300 ${
                        isDark ? "text-green-400" : "text-emerald-800"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Piper@example.com"
                      required
                      value={senderEmail}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSenderEmail(e.target.value)
                      }
                      className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors duration-300 ${
                        isDark
                          ? "bg-emerald-950 border-emerald-700 text-emerald-100 placeholder-emerald-400"
                          : "border-green-300 text-slate-900"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className={`font-medium transition-colors duration-300 ${
                      isDark ? "text-green-400" : "text-emerald-800"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject Line..."
                    required
                    value={subject}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setSubject(e.target.value)
                    }
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors duration-300 ${
                      isDark
                        ? "bg-emerald-950 border-emerald-700 text-emerald-100 placeholder-emerald-400"
                        : "border-green-300 text-slate-900"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className={`font-medium transition-colors duration-300 ${
                      isDark ? "text-green-400" : "text-emerald-800"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message here..."
                    required
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                    className={`px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none transition-colors duration-300 ${
                      isDark
                        ? "bg-emerald-950 border-emerald-700 text-emerald-100 placeholder-emerald-400"
                        : "border-green-300 text-slate-900"
                    }`}
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className={`px-6 py-3 items-center cursor-pointer text-white flex gap-3 font-semibold rounded-md transition-all duration-300 w-full md:w-max hover:scale-105 ${
                    isDark
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-green-800 hover:bg-green-700"
                  }`}
                >
                  <Send className="size-3.5" />{" "}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={`w-full h-max transition-colors duration-300 ${
          isDark ? "bg-emerald-950 border-t border-green-400" : "bg-green-100"
        }`}
        id="Footer"
      >
        <div className="px-5 flex flex-col items-center gap-1 py-7 md:px-20 lg:px-20">
          <h1
            className={`font-semibold font-mono text-2xl tracking-tight transition-colors duration-300 ${
              isDark ? "text-green-400" : "text-slate-900"
            }`}
          >
            Muby
          </h1>
          <p
            className={`text-sm text-center leading-5 transition-colors duration-300 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Copyright © {new Date().getFullYear()}, Mubaraq Allamalyekeen. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// https://www.instagram.com/icon_mubaraq/
