import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to Rambod Azimi's Personal Website");
  banner.push("<br>");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${command.repoLink}' target='_blank'>here</a>.`);
  banner.push("Type <span class='command'>'resume'</span> to view the resume or click <a href='" + command.resumeLink + "' target='_blank'>here</a>.");
  banner.push("<br>");
  banner.push("Software Engineering graduate from McGill University.");
  banner.push("Specialized in AI software solutions, including ML and LLMs.");
  banner.push("Experienced in building scalable web apps and automation systems.");
  banner.push("Worked at Quantiphi, McGill, NRC, MILA, Ericsson, and more.");
  banner.push("Skilled in Python, Java, C, PyTorch, Docker, and more.");
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
