import command from '../../config.json' assert { type: 'json' };

const createProject = (): string[] => {
  const projects: string[] = [];
  const SPACE = "&nbsp;";
  const files = `${command.projects.length} File(s)`;

  projects.push("<br>");

  command.projects.forEach(([title, description, url]) => {
    const link = `<a href="${url}" target="_blank">${title}</a>`;
    const padding = SPACE.repeat(Math.max(2, 17 - title.length));
    const line = `${SPACE.repeat(2)}${link}${padding}${description}`;
    projects.push(line);
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");

  return projects;
};

export const PROJECTS = createProject();
