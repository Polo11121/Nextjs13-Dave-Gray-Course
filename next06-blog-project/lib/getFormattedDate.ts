export const getFormattedDate = (dateString: string) =>
  Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
