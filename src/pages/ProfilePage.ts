import type { Component } from "../shared/lib/components/types.js";
import { ProfileCard } from "../widgets/ProfileCard.js";
import { ProfileData } from "../widgets/ProfileData.js";
import { PasswordForm } from "../widgets/PasswordForm.js";

export const ProfilePage: Component = () => {
    const main = document.createElement("main");
    main.className = "site-main";

    main.append(
        ProfileCard({ tag: "#92LV90UU", status: "Владелец Цилиндра", avatar: "https://icons8.com" }),
        ProfileData({
            rows: [
                { label: "Email", value: "mortis@brawl.ru" },
                { label: "Кубки", value: "1250" },
                { label: "Скин", value: "Коварный Мортис" },
                { label: "Режим", value: "Броулбол (3 на 3)" },
            ],
        }),
        PasswordForm({})
    );

    return main;
};
