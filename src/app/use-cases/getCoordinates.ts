import type { Callbacks } from "@/common/use-cases/callbacks";
import axios from "axios";

async function getCoordinates(targetName: string) {
  const coordenadas = await axios
    .get(`https://cds.unistra.fr/cgi-bin/nph-sesame/-ox?${targetName}`)
    .then((result) => {
      const parser = new DOMParser();
      const xmlDom = parser.parseFromString(result.data, "application/xml");
      const jra: string = xmlDom.querySelector("jradeg")!.innerHTML;
      const jdec: string = xmlDom.querySelector("jdedeg")!.innerHTML;
      return { jra, jdec };
    });
  return coordenadas;
}

export const getCoordinatesUseCase = {
  execute: async (targetName: string, callbacks: Callbacks) => {
    try {
      const result = await getCoordinates(targetName);
      console.log("estoy en el execute", result.jra, result.jdec)
      callbacks.handleSuccess(result);
    } catch (error: Error) {
      callbacks.handleError(error);
    }
  },
};
export { getCoordinates };
