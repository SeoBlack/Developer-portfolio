import { FaCheckCircle } from "react-icons/fa";
export default function ServiceCard({ plan }) {
  const { title, price, features, description } = plan;
  if (title === "Premium")
    return (
      <div className="md:w-1/3 w-full  bg-gradient-to-r from-cyan to-purple rounded-lg flex justify-center items-center p-2">
        <div className="bg-lighterDarkBlue rounded-lg flex flex-col items-center py-8 px-6">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-2xl ">{title}</h1>
            <h1 className=" ">
              <span className="text-2xl">${price}</span>
              <span className="font-thin">/month</span>
            </h1>
          </div>
          <div className="w-full h-[1px] bg-grey/30 m-5"></div>
          <div className="w-full flex flex-col gap-2 my-5">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-cyan text-xl" />
                <div className="w-[90%]">
                  <p className="text-white/70">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="self-end">
            <p className="text-grey">{description}</p>
          </div>
        </div>
      </div>
    );
  return (
    <div className="md:w-1/3 w-full  bg-lighterDarkBlue rounded-lg flex flex-col items-center py-8 px-6">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-2xl ">{title}</h1>
        <h1 className=" ">
          <span className="text-2xl">${price}</span>
          <span className="font-thin">
            /{title === "Custom" ? "hour" : "month"}
          </span>
        </h1>
      </div>
      <div className="w-full h-[1px] bg-grey/30 m-5"></div>
      <div className="w-full flex flex-col gap-2 my-5">
        {features.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan text-xl" />
            <div className="w-[90%]">
              <p className="text-white/70">{item}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <p className="text-grey">{description}</p>
      </div>
    </div>
  );
}
