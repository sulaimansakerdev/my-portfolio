import Image from "next/image";
import { Project } from "./projects";
import LinkIcon from "@/components/icons/link-icon";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { image, title, des } = project;

  return (
    <div className="flex flex-col">
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
          href="#"
          aria-label={`Visit ${title}`}
          className="hover:rotate-45 transition-transform duration-300"
        >
          <LinkIcon />
        </a>
      </div>
    </div>
  );
}
