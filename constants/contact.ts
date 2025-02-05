import PhoneIcon from "@/public/icons/PhoneIcon"
import EmailIcon from "@/public/icons/EmailIcon"
import GithubIcon from "@/public/icons/GithubIcon"
import LinkedInIcon from "@/public/icons/LinkedInIcon"
import LocationDotIcon from "@/public/icons/LocationDotIcon"

export const CONTACT = {
    name: "Mateusz",
    surname: "Bizoń",
    intro: "Junior React developer with experience in Next.js",
    infos: [
        { name: "Phone number", value: "+48 723 875 386", icon: PhoneIcon() },
        { name: "Email", value: "mateuszbizon2000@gmail.com", icon: EmailIcon() },
        { name: "Location", value: "Jerzmanki 22F/5, 59-900 Zgorzelec", icon: LocationDotIcon() },
    ],
    socialLinks: [
        { name: "Github", link: "https://github.com/mateuszbizon", icon: GithubIcon() },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/mateusz-bizo%C5%84-ab5672304", icon: LinkedInIcon() },
    ]
}