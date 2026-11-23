import type { Component } from "../shared/lib/components/types.js";

interface ProfileDataProps {
    rows: { label: string; value: string }[];
}

export const ProfileData: Component<ProfileDataProps> = ({ rows }) => {
    const section = document.createElement("section");
    section.className = "profile-data";
    section.innerHTML = "<h3>Данные анкеты</h3>";

    for (const row of rows) {
        const div = document.createElement("div");
        div.className = "data-row";
        div.innerHTML = `<span>${row.label}:</span> <strong>${row.value}</strong>`;
        section.append(div);
    }

    return section;
};
