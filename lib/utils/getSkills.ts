import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "skill"] | order(_updatedAt)
`;

const getSkills = async () => {
    const skills: Skill[] = await client.fetch(query);
    return skills;
}

export default getSkills;