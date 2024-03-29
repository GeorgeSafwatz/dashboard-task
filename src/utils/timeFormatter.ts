/**
 * Returns the current date in the format "YYYY-MM-DD".
 *
 * @returns The current date in "YYYY-MM-DD" format.
 */
export const todayDate = (): string => {
  const timestamp = Date.now();
  const dateObject = new Date(timestamp);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

/**
 * Returns the date one month ago from the current date in the format "YYYY-MM-DD".
 *
 * @returns The date one month ago from the current date in "YYYY-MM-DD" format.
 */
export const getDateOneMonthAgo = (): string => {
  const currentDate = new Date();

  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const year = oneMonthAgo.getFullYear();
  const month = String(oneMonthAgo.getMonth() + 1).padStart(2, "0");
  const day = String(oneMonthAgo.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
