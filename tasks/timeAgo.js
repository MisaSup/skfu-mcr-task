export const formatTimeAgo = (date) => {
    const d = date instanceof Date ? date : new Date(date);
    const diffMs = Date.now() - d.getTime();
    const diffMinutes = Math.floor(diffMs / (60 * 1000));
    const diffHours = Math.floor(diffMs / (3600 * 1000));
    const diffDays = Math.floor(diffMs / (24 * 3600 * 1000));

    if (diffMinutes < 1) return "just now";
    if (diffHours < 1) return `${diffMinutes} ${diffMinutes === 1 ? "minute" : "minutes"} ago`;
    if (diffDays < 1) return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
    if (diffDays === 1) return "yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
};
