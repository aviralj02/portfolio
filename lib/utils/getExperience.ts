import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "experience"] | order(_updatedAt desc){
        ...,
        technologies[]->
    }
`;

const getExperience = async () => {
    const experience: Experience[] = await client.fetch(query);
    return experience;
}

export default getExperience;