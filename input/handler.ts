import { randomLightColor } from "seed-to-color";
import { generateColour } from "./utility"; // works when removed

function handler() {
  return [randomLightColor(), generateColour()];
}

export { handler };
