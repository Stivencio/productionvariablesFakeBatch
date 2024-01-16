export const generateRandomTimestamp = () => {
    const startDate = new Date(2024, 0, 1).getTime();
    const endDate = new Date(2024, 11, 31).getTime();
    return (
      Math.floor(Math.random() * (endDate - startDate + 1) + startDate) / 1000
    )
}