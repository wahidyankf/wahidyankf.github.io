const formatTimeDuration = timeDuration => {
  const numberOfMonths = Math.floor(timeDuration / (1000 * 3600 * 24 * 30));
  const numberOfYears = Math.floor(numberOfMonths / 12);
  const numberOfRemainderMonths = Math.floor(numberOfMonths % 12);

  const yearEnding = numberOfYears > 1 ? 's' : '';
  const monthEnding = numberOfMonths > 1 ? 's' : '';

  let formattedTimeDuration;
  if (numberOfMonths > 12 && numberOfRemainderMonths > 0) {
    formattedTimeDuration = `${numberOfYears} Year${yearEnding}, ${numberOfRemainderMonths} Month${yearEnding}`;
  } else if (numberOfMonths > 12 && numberOfRemainderMonths === 0) {
    formattedTimeDuration = `${numberOfYears} Year${yearEnding}`;
  } else {
    formattedTimeDuration = `${numberOfMonths} Month${monthEnding}`;
  }

  return formattedTimeDuration;
};

const dateShown = (start, end, type = 'compact') => {
  const dateNow = new Date();
  const startMonth = `${Number(start.slice(0, 2) - 1)}`;
  const startYear = `${Number(start.slice(3))}`;

  const endMonth =
    end.toLowerCase() === 'now'
      ? `${dateNow.getMonth()}`
      : `${Number(end.slice(0, 2) - 1)}`;
  const endYear =
    end.toLowerCase() === 'now'
      ? `${dateNow.getFullYear()}`
      : `${Number(end.slice(3))}`;
  const adaptedEndMonth = `${Number(endMonth) + 1}`;

  const dateStart = new Date(startYear, startMonth);
  const dateEnd = new Date(endYear, adaptedEndMonth);

  const timeDuration = dateEnd - dateStart;

  const duration =
    type === 'compact'
      ? ''
      : `<i class="fa fa-circle time-duration"></i>${formatTimeDuration(
          timeDuration
        )}`;

  if (start === end) {
    return start;
  }
  return `${start} - ${end}${duration}`;
};
