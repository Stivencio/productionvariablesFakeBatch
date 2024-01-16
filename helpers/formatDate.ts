export const formatDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      }).format(date);
    
      return formattedDate.replace(
        /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/,
        "$1 $2"
      );
}