import { ProfileCard } from "../widgets/ProfileCard.js";
import { ProfileData } from "../widgets/ProfileData.js";
import { PasswordForm } from "../widgets/PasswordForm.js";

export const ProfilePage = () => {
    const main = document.createElement("main");
    main.className = "site-main";

    const userCard = ProfileCard({
        tag: "#92LV90UU",
        status: "Владелец Цилиндра",
        avatar: "https://icons8.com",
    });

    const userData = ProfileData([
        { label: "Email", value: "mortis@brawl.ru" },
        { label: "Кубки", value: "1250" },
        { label: "Скин", value: "Коварный Мортис" },
        { label: "Режим", value: "Броулбол (3 на 3)" },
    ]);

    main.append(userCard, userData, PasswordForm());
    return main;
};
