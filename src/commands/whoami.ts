const whoamiObj = {
  "message" : [
    [
      "In the quiet corridors of McGill,",
      "and the deep layers of neural nets,",
      "I search not just for patterns,",
      "but for purpose.",
      "Between research papers and production code,",
      "I’ve taught machines to learn,",
      "but still ask myself: "
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
