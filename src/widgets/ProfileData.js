export const ProfileData = (items) => {
    const section = document.createElement("section");
    section.className = "profile-data";

    const title = document.createElement("h3");
    title.textContent = "Данные анкеты";
    section.append(title);

    items.forEach(({ label, value }) => {
        const row = document.createElement("div");
        row.className = "data-row";
        row.innerHTML = `<span>${label}:</span> <strong>${value}</strong>`;
        section.append(row);
    });

    return section;
};
