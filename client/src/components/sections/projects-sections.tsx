import { client } from "@/sanity/client";
import { ProjectCard } from "../common/project-card";
import { type SanityDocument } from "next-sanity";
import { PROJECT_QUERY } from "@/utils";

const options = { next: { revalidate: 30 } };
export const ProjectsSection = async () => {
  const posts = await client.fetch<SanityDocument[]>(
    PROJECT_QUERY,
    {},
    options,
  );

  console.log(posts);

  return (
    <section className="">
      {[1, 2].map((item, index) => (
        <ProjectCard key={index} />
      ))}
    </section>
  );
};
