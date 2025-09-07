const items = [
  {
    id: "1",
    title: "Data Analytics & Visualization",
    des: "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.",
  },
  {
    id: "2",
    title: "Predictive Analytics and Forecasting",
    des: "From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success",
  },
  {
    id: "3",
    title: "Natural Language Processing",
    des: "From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age",
  },
  {
    id: "4",
    title: "AI Chatbots",
    des: "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.",
  },
  {
    id: "5",
    title: "Machine Learning",
    des: "From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success",
  },
  {
    id: "6",
    title: "Natural Language Processing",
    des: "From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age",
  },
];

const WhatIDo = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-extrabold text-[2.8125rem]">What I do</h2>

        <div className="font-semibold text-[0.875rem] bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent mb-40">
          My Services
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-20 gap-y-26">
        {items.map(({ id, title, des }) => (
          <div
            key={id}
            className="border border-[#2B2B2B] rounded-2xl p-40 bg-[linear-gradient(120deg,#1C1C1C_50%,#050505_100%)]"
          >
            <div>
              <div className="font-semibold text-2xl mb-18">{title}</div>
              <p className="text-sm text-body-text-color">{des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
