export const ProfileCard = ({ tag, status, avatar }) => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
        <img src="${avatar}" alt="User Avatar" class="profile-avatar">
        <h2 class="profile-tag">${tag}</h2>
        <span class="profile-status">Статус: ${status}</span>
    `;
    return card;
};
