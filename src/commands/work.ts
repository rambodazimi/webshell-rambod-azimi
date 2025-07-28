import command from '../../config.json' assert { type: 'json' };

const createWork = (): string[] => {
  const works: string[] = [];
  const SPACE = "&nbsp;";
  const files = `${command.works.length} File(s)`;

  works.push("<br>");

  command.works.forEach(([title, description, url]) => {
    const link = `<a href="${url}" target="_blank">${title}</a>`;
    const padding = SPACE.repeat(Math.max(2, 17 - title.length));
    const line = `${SPACE.repeat(2)}${link}${padding}${description}`;
    works.push(line);
  });

  works.push("<br>");
  works.push(files);
  works.push("<br>");

  return works;
};

export const WORK = createWork();
