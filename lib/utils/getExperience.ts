import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
`;

const getExperience = async () => {
    const experience: Experience[] = await client.fetch(query);
    return experience;
}

export default getExperience;