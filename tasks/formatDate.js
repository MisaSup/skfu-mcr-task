export const formatDate = (date, formatString) => {
    const d = new Date(date);
    const YYYY = String(d.getFullYear());
    const MM = String(d.getMonth() + 1).padStart(2, "0");
    const DD = String(d.getDate()).padStart(2, "0");
    const HH = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");

    return formatString
        .replaceAll("YYYY", YYYY)
        .replaceAll("MM", MM)
        .replaceAll("DD", DD)
        .replaceAll("HH", HH)
        .replaceAll("mm", mm);
};
