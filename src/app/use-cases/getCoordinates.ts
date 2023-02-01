import axios from "axios";

function getCoordinates() {
  axios
    .get(`https://cds.unistra.fr/cgi-bin/nph-sesame/-ox?${targetName}`) //********* */
    .then((result) => {
      const parser = new DOMParser();
      const xmlDom = parser.parseFromString(result.data, "application/xml");
      const jra = xmlDom.querySelector("jradeg").innerHTML;
      const jdec = xmlDom.querySelector('jdedeg').innerHTML;
      console.log(jra, jdec);
    });
}

export { getCoordinates };
