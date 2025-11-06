export function formatPublishedDate(dateString: string): string {
  const published = new Date(dateString);
  const year = published.getFullYear();
  const month = String(published.getMonth() + 1).padStart(2, "0");
  const day = String(published.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

