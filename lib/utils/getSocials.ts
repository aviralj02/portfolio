import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "social"]
`;

const getSocials = async () => {
    const socials: Social[] = await client.fetch(query);
    return socials;
}

export default getSocials;