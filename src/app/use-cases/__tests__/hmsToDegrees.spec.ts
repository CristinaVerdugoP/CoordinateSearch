import { installPinia } from "@/common/installPinia";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import { raHmsToDegrees } from "@/app/use-cases/hmsToDegrees";
import { decHmsToDegrees } from "@/app/use-cases/hmsToDegrees";

installPinia();
installQuasar();

vi.mock("@/app/use-cases/hmsToDegrees");

describe("Convertion Hms to Degrees", () => {
  it("should convert the hms coordinates to degrees coordinates", async () => {
    const convertionRa = raHmsToDegrees(10, 11, 12);
    const convertionDec = decHmsToDegrees(10, 11, 12);
    expect(convertionRa).toBe("152.800");
    expect(convertionDec).toBe("10.187");
  });
});
