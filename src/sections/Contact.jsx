import Button from "../components/Button";
import Container from "../components/Container";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  console.log(emailjsPublicKey, emailjsServiceId, emailjsTemplateId);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, form.current, {
        publicKey: emailjsPublicKey,
      })
      .then(
        () => alert("Sent Successfully"),
        (error) => alert("failed to send email")
      );
  };
  return (
    <Container className="py-16" id="contact">
      <div className="text-center text-white max-w-[550px] mx-auto ">
        <h1 className="text-3xl font-bold md:h-[50px] h-[100px] my-14">
          Let's connect and create{" "}
          <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
            <ReactTyped
              strings={["Something remarkable!"]}
              typeSpeed={100}
              backSpeed={40}
              startWhenVisible
            />
          </span>
        </h1>
        <p className="text-grey my-5">
          Have a project in mind or questions about our services? Get in touch
          with us today! We're here to bring your ideas to life and help your
          business thrive. Reach out now and let's start collaborating!
        </p>
      </div>
      <div className="bg-lighterDarkBlue rounded-3xl p-10">
        <div>
          <h1 className="text-2xl text-white font-semibold mb-5 md:text-start text-center">
            Contact
          </h1>
        </div>
        <div className=" flex md:flex-row flex-col md:items-start items-center">
          <div className="md:w-[55%] w-full">
            <form
              action="#"
              className="flex flex-col gap-5"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="bg-darkBlue p-3 rounded-lg text-white focus:border-purple"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="bg-darkBlue p-3 rounded-lg text-white focus:border-purple"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                className="bg-darkBlue p-3 rounded-lg text-white focus:border-purple"
              ></textarea>
              <div className="pt-5 self-center">
                <Button className="bg-purple" width="w-[140px] ">
                  Send
                </Button>
              </div>
            </form>
          </div>

          <div className="md:w-[1px] w-[50%] h-[1px] md:h-[300px] bg-grey mx-10 md:my-0 my-10"></div>
          <div className="flex md:w-[45%] w-full flex-col items-start bg-darkBlue text-white py-5 px-6 rounded-lg gap-4 ">
            <h1 className="text-xl">Contact Info</h1>
            <p>
              <FaPhoneVolume className="inline mr-3 text-xl  text-cyan" />
              +35894848484
            </p>
            <p>
              <MdOutlineAlternateEmail className="inline mr-3 text-xl text-cyan" />
              someemail@gmail.com
            </p>
            <p>
              <FaLocationPin className="inline mr-3 text-xl text-cyan" />
              someaddress 4 A 4
            </p>
            <div className="w-full h-[1px] bg-grey"></div>
            <div className="flex justify-around">
              <div className="w-[12%]">
                <img src="images/social/linkedin.png" alt="" />
              </div>
              <div className="w-[12%]">
                <img src="images/social/facebook.png" alt="" />
              </div>
              <div className="w-[12%]">
                <img src="images/social/instagram.png" alt="" />
              </div>
              <div className="w-[12%]">
                <img src="images/social/whatsapp.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
