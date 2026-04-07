export const getTimeOfDay = () => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) return 'day';
    if (hour >= 12 && hour < 18) return 'afternoon';
    return 'night';
};