type SanityBody = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePicture: Image;
}

interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    title: string;
}
interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    title: string;
}

interface Project extends SanityBody{
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    liveLink: string;
    summary: string;
    technologies: Technology[];
}

interface Social extends SanityBody{
    _type: "social"
    title: string;
    iconImage: Image;
    url: string;
}

interface Image extends SanityBody{
    _type: "image";
    asset: {
        ref: string;
        type: "reference";
    }
}