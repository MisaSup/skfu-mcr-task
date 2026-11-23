import type { Component } from "../shared/lib/components/types.js";

interface ProfileCardProps {
    tag: string;
    status: string;
    avatar: string;
}

export const ProfileCard: Component<ProfileCardProps> = ({ tag, status, avatar }) => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
        <img src="${avatar}" alt="Avatar" class="profile-avatar">
        <h2 class="profile-tag">${tag}</h2>
        <span class="profile-status">Статус: ${status}</span>
    `;
    return card;
};
