import Image from "next/image";
import Project from "@/interfaces/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { image, title, des, link } = project;

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden dark:shadow-sm">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="rounded-t-2xl object-cover w-full"
      />

      <div className="p-4 flex justify-between items-end">
        <div>
          <h3 className="text-lg font-bold text-neutral-700 dark:text-stone-300">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{des}</p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title} project`}
          className="hover:rotate-45 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded"
        >
          <Image
            src="/assets/icons/link-icon.svg"
            alt=""
            width={38}
            height={38}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
