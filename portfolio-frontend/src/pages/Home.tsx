import Header from "../myComponent/header"
import { useEffect, useState, type ChangeEvent } from "react"
import { projectCardDetails } from "../myComponent/data"
import { ArrowBigRightDash, Code, Facebook, FolderGit, Github, GlobeIcon, NetworkIcon, Send, Twitter, } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link } from "react-scroll"
import toast from "react-hot-toast"

const Home = () => {
    const [name, setName] = useState<string>('');
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setloading] = useState<boolean>(false)

    useEffect(()=>{
        AOS.init({
            duration: 1300
        });
    }, [])

    const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        if(!name.trim() || !senderEmail.trim() || !subject.trim() || !message.trim()){
           toast.error("Please fill all fields."); return; 
        }
        setloading(true); 
        
        try{
            const mailtoSubject = encodeURIComponent(subject);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\nFrom: ${senderEmail}\n\nMessage:\n${message}`
            );
            const recipientEmail = "mubaraqadeniyi159@gmail.com";
            const mailtoLink = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
            window.location.href = mailtoLink;
            setName("");
            setMessage("");
            setSenderEmail("");
            setSubject("");
        } catch(error){
            console.error("Error constructing or navigating to mailto link:", error);
            toast.error("Could not open your gmail.");
        } finally{
            setloading(false)
        }
    };


  return (
    <div>
        <section className="w-full h-max md:h-[100vh] lg:h-[100vh] bg-green-50 " id="Home">
            <div className="relative items-center w-full h-full flex flex-col px-5 md:px-20 lg:px-20 pt-15 pb-5 md:pt-20 lg:pt-20 md:pb-10 lg:pb-10">
                <Header />
                <div className="grid mt-20 items-center gap-12 md:gap-0 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full">
                    {/* <p className="px-3 py-1 w-max bg-green-200 text-emerald-950 text-[12px] font-medium rounded-full">Full-Stack Developer</p> */}
                    <div className="flex flex-col items-center md:items-start lg:items-start gap-7 text-center md:text-start lg:text-start">
                        <h1 className="text-3xl text-black flex flex-col font-bold">
                            <span>Hi, I'm </span>
                            <span className="text-green-900">Mubaraq Allamalyekeen</span>
                        </h1>
                        <p>I am a seasoned Full-Stack Developer with hands-on experience building high quality,
                            robust and scalable digital solutions. I specialized in <span className="font-medium">Frontend development</span> turning complex 
                            UI's into functional web application that has real-world impact.
                        </p>
                        <div className="flex w-max flex-row justify-center md:justify-start lg:justify-start gap-3">
                            <button className="px-4 text-white py-2 rounded-[7px] font-semibold cursor-pointer bg-green-800">Check Resume</button>
                            <button className="px-4 text-white py-2 rounded-[7px] font-semibold cursor-pointer bg-green-500"><Link to="Contact" smooth={true} duration={500}>Contact Me</Link></button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center md:ml-12 lg:ml-12">
                        <div className="h-74 w-64 border-2 border-green-500 rounded-2xl flex justify-center items-center">
                            <div className="bg-green-800 h-70 w-60 rounded-2xl ">
                                <img src="/user.jpg" className="h-full rounded-2xl" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* `second section` */}
        <section className="w-full h-max bg-green-100" id="About">
            <div className="px-5 flex flex-col gap-10 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10">
                <div className="flex flex-col gap-2 justify-center items-center text-center py-3">
                    <h1 className="text-2xl font-bold text-emerald-950 underline underline-offset-6">About Me</h1>
                    <p className="text-[17px] font-normal text-emerald-950 md:max-w-4xl lg:max-w-4xl">I'm a passionate and versatile Full-Stack Developer with a strong focus on {""} <span className="font-medium">Frontend development</span> {""}
                        crafting high quality, scalable, and engaging user interfaces. Over the past year, I've honed my skills building real-world web solutions
                        from dynamic and scalable landing pages to fully functional web applications.
                    </p>
                </div>
                <div className="gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className='px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg shadow-2xl border border-green-300' data-aos="fade-up">
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <div className="rounded-full bg-emerald-900 p-3 w-max">
                                <Code  className="text-green-200 size-5"/>
                            </div>
                            <h1 className="text-2xl font-semibold text-center">Full-Stack Development</h1>
                            <p className="text-[17px] text-center">Building Responsive and scalable full-stack application</p>
                        </div>
                    </div>

                    <div className='px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg shadow-2xl border border-green-300' data-aos="fade-up">
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <div className="rounded-full bg-emerald-900 p-3 w-max">
                                <GlobeIcon  className="text-green-200 size-5"/>
                            </div>
                            <h1 className="text-2xl font-semibold text-center">Web Application</h1>
                            <p className="text-[17px] text-center">Building Responsible and user-friendly web applications with modern Technologies</p>
                        </div>
                    </div>

                    <div className='px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg shadow-2xl border border-green-300' data-aos="fade-up">
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <div className="rounded-full bg-emerald-900 p-3 w-max">
                                <NetworkIcon  className="text-green-200 size-5"/>
                            </div>
                            <h1 className="text-2xl font-semibold text-center">Problem Solving</h1>
                            <p className="text-[17px] text-center">Building solutions dedicated to solve complex technical challenges</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* third section */}
        <section className="w-full h-max bg-green-600" id="Projects">
            <div className="px-5 flex flex-col gap-7 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10">
                <div className="flex flex-col gap-3 justify-center items-center text-center py-3">
                    <h1 className="text-2xl font-bold text-white underline underline-offset-8">Featured Projects</h1>
                    <p className="text-[16px] font-normal text-white md:max-w-4xl lg:max-w-4xl leading-5">Here are some past Projects i've worked on, to show case my skill</p>
                </div>
                <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projectCardDetails.map(item =>(
                        
                        <div key={item.id}>
                            <div className='border h-max md:h-93 lg:h-93 px-5 py-6 flex flex-col justify-between rounded-r rounded-b-lg bg-white' data-aos="fade-up">
                                {/* <div className="w-full cover h-20"> */}
                                    <img src={item.image} alt={item.alt} className="w-full h-35 object-cover border-4 rounded border-green-900" />
                                {/* </div> */}
                                <div className="flex flex-col gap-2 mt-2">
                                    <h1 className="font-semibold text-2xl">{item.head}</h1>
                                    <p className="text-sm ">{item.parag}</p>
                                    <div className="flex gap-2 text-center justify-start mt-1">
                                        <p className="px-2 py-1 bg-green-300 text-emerald-950 text-[12px] font-medium rounded-full">{item.stack}</p>
                                        <p className="px-2 py-1 bg-green-300 text-emerald-950 text-[12px] font-medium rounded-full">{item.stack2}</p>
                                        <p className="px-2 py-1 bg-green-300 text-emerald-950 text-[12px] font-medium rounded-full">{item.stack3}</p>
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <button className="px-5 rounded-[8px] font-normal py-2 curosr-pointer bg-emerald-950 text-white"><a href={item.code} target="_blank" className="flex gap-2 items-center"><FolderGit className="size-4" /> Code</a></button>
                                        <button className="px-5 rounded-[8px] font-normal border py-2 curosr-pointer bg-green-500 text-white"><a href={item.live} target="_blank" className="flex gap-1 items-center"><ArrowBigRightDash className="size-5" /> Live</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>

        {/* fourth section */}
        <section className="w-full py-7 md:py-10 lg:py-10 px-5 md:px-20 lg:px-20 h-max bg-green-100" id="Skills">
            <div className="px-5 flex flex-col gap-7 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10 bg-emerald-950 rounded-2xl">
                  <div className="flex flex-col gap-3 justify-center items-center text-center py-2">
                    <h1 className="text-2xl font-bold text-white underline underline-offset-8">Skill & Expertise</h1>
                    <p className="text-[16px] font-normal text-white md:max-w-4xl lg:max-w-4xl leading-5">Over the past year, I've developed expertise in these tools and technology</p>
                </div>

                <div className="gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className='px-5 py-5 flex flex-col gap-3 rounded-r rounded-b-lg shadow-sm shadow-emerald-900' data-aos="fade-up">
                        <div className="flex flex-col gap-2 items-center justify-center text-white">
                            <h1 className="text-2xl font-semibold text-center text-green-500">Frontend Development</h1>
                            <p className="text-[16px] text-center">HTML, CSS, Javascript, ReactJS, Typescript</p>
                        </div>
                    </div>
                    <div className='px-5 py-5 flex flex-col gap-3 rounded-r rounded-b-lg shadow-sm shadow-emerald-900' data-aos="fade-up">
                        <div className="flex flex-col gap-2 items-center justify-center text-white">
                            <h1 className="text-2xl font-semibold text-center text-green-500">Backend Development</h1>
                            <p className="text-[16px] text-center">NodeJS, ExpressJS</p>
                        </div>
                    </div>
                    <div className='px-5 py-5 flex flex-col gap-3 rounded-r rounded-b-lg shadow-sm shadow-emerald-900' data-aos="fade-up">
                        <div className="flex flex-col gap-2 items-center justify-center text-white">
                            <h1 className="text-2xl font-semibold text-center text-green-500">Database</h1>
                            <p className="text-[16px] text-center">MongoDB</p>
                        </div>
                    </div>
                </div>  
            </div>
        </section>

        {/* fifth section */}
        <section className="w-full h-max bg-green-50" id="Contact">
            <div className="px-5 flex flex-col gap-7 py-10 md:px-20 lg:px-20 md:py-10 lg:py-10">
                <div className="flex flex-col gap-2 justify-center items-center text-center py-3 text-emerald-950">
                    <h1 className="text-2xl font-bold underline underline-offset-8 ">Get In Touch</h1>
                    <p className="text-[16px] font-normal md:max-w-4xl lg:max-w-4xl leading-5">Over the past year, I've developed expertise in these tools and technology</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="font-semibold text-[17px]">Connect with me</h1>
                        <div className=" flex gap-4">
                            <a href="https://x.com/Icon_mubaraq?s=09" target="_blank" className="bg-green-100 p-2 rounded-full hover:bg-green-400"> <Twitter /> </a>
                            <a href="https://github.com/iconicconcept" target="_blank" className="bg-green-100 p-2 rounded-full hover:bg-green-400"> <Github /> </a>
                            <a href="https://www.facebook.com/mubaraq.adeniyi.79" target="_blank" className="bg-green-100 p-2 rounded-full hover:bg-green-400"> <Facebook /> </a>
                        </div>
                    </div>
                    
                    <div className="flex max-w-4xl w-full rounded-2xl bg-green-100 shadow-2xs" >
                        <form className="flex flex-col gap-4 p-6 md:p-8 lg:p-8 rounded-xl bg-white shadow-lg w-full border border-green-200">
                            <h1 className="font-semibold text-emerald-900 text-[17px] mb-1">Send me a Message</h1>
                            <div className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="font-medium text-emerald-800">Full Name</label>
                                    <input type="text" 
                                        id="name" name="name" 
                                        placeholder="e.g John Piper" required 
                                        className="px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                        value={name}
                                        onChange={(e: ChangeEvent<HTMLInputElement> )=>setName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="font-medium text-emerald-800">Email Address</label>
                                    <input type="email" 
                                        id="email" name="email" 
                                        placeholder="Piper@example.com" required 
                                        value={senderEmail}
                                        onChange={(e: ChangeEvent<HTMLInputElement> )=>setSenderEmail(e.target.value)}
                                        className="px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="subject" className="font-medium text-emerald-800">Subject</label>
                                <input type="text" 
                                    id="subject" name="subject" 
                                    placeholder="Subject Line..." required
                                    value={subject}
                                    onChange={(e: ChangeEvent<HTMLInputElement> )=>setSubject(e.target.value)} 
                                    className="px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="font-medium text-emerald-800">Message</label>
                                <textarea id="message" 
                                    name="message" rows={4} 
                                    placeholder="Your message here..." required
                                    value={message}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement> )=>setMessage(e.target.value)} 
                                    className="px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"></textarea>
                            </div>
                            <button type="button" onClick={handleSendEmail} className="px-6 py-3 items-center cursor-pointer bg-green-800 text-white flex gap-3 font-semibold rounded-md hover:bg-green-700 transition-colors w-full md:w-max">
                                <Send className="size-3.5"/> {loading ? "Sending..." : "Send Message" }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer className="w-full h-max bg-green-100" id="Footer">
            <div className="px-5 flex flex-col items-center gap-1 py-7 md:px-20 lg:px-20">
                    <h1 className="font-semibold font-mono text-2xl tracking-tight">MrMay</h1>
                    <p className="text-sm text-center leading-5">Copyright © 2025, Mubaraq Allamalyekeen. All Rights Reserved.</p>
            </div>
        </footer>


    </div>
  )
}

export default Home