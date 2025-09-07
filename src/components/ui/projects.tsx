const items = [
  {
    id: "1",
    title: "Project name/description",
    des: "Technology used",
  },
  {
    id: "2",
    title: "Project name/description",
    des: "Web Design / Usability Testing",
  },
  {
    id: "3",
    title: "Natural Language Processing",
    des: "Web Design / Usability Testing",
  },
  {
    id: "4",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
  },
  {
    id: "5",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
  },
  {
    id: "6",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-extrabold text-[2.8125rem]">Projects</h2>

        <div className="font-semibold text-[0.875rem] bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent mb-40">
          Some of my Work
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

export default Projects;
