export const formatTimeDuration = (timeDuration: number): string => {
  const numberOfMonths = Math.floor(timeDuration / (1000 * 3600 * 24 * 30));
  const numberOfYears = Math.floor(numberOfMonths / 12);
  const numberOfRemainderMonths = Math.floor(numberOfMonths % 12);

  const yearEnding = numberOfYears > 1 ? 's' : '';
  const monthEnding = numberOfMonths > 1 ? 's' : '';

  let formattedTimeDuration;
  if (numberOfMonths > 12 && numberOfRemainderMonths > 0) {
    formattedTimeDuration = `${numberOfYears} Year${yearEnding}, ${numberOfRemainderMonths} Month${monthEnding}`;
  } else if (numberOfMonths > 12 && numberOfRemainderMonths === 0) {
    formattedTimeDuration = `${numberOfYears} Year${yearEnding}`;
  } else {
    formattedTimeDuration = `${numberOfMonths} Month${monthEnding}`;
  }

  return formattedTimeDuration;
};

export const showTimeDuration = (
  start: string,
  end: string,
  type = 'compact'
): string => {
  const now = 'now';
  const dateNow = new Date();
  const startMonth = Number(start.slice(0, 2)) - 1;
  const startYear = Number(start.slice(3));

  const endMonth =
    end.toLowerCase() === now
      ? `${dateNow.getMonth()}`
      : `${Number(end.slice(0, 2)) - 1}`;
  const endYear =
    end.toLowerCase() === now ? dateNow.getFullYear() : Number(end.slice(3));
  const adaptedEndMonth = Number(endMonth) + 1;

  const dateStart: Date = new Date(startYear, startMonth);
  const dateEnd: Date = new Date(endYear, adaptedEndMonth);

  const timeDuration = Number(dateEnd) - Number(dateStart);

  const duration =
    type === 'compact'
      ? ''
      : `<i class="fa fa-circle time-duration"></i>${formatTimeDuration(
          timeDuration
        )}`;

  if (start === end || end.length === 0) {
    return start;
  }

  return `${start} - ${end}${duration}`;
};
