import { mount, flushPromises } from "@vue/test-utils";
import { installPinia } from "@/common/installPinia";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import { useCoordinateStore } from "@/ui/stores/conesearch";
import { raHmsToDegrees } from "@/app/use-cases/hmsToDegrees";
import { decHmsToDegrees } from "@/app/use-cases/hmsToDegrees";
import coordinateSearch from "@/ui/components/coordinateSearch.vue";

installPinia();
installQuasar();

describe("Convertion Hms to Degrees", () => {
  it("should convert the hms coordinates to degrees coordinates", () => {
    const convertionRa = raHmsToDegrees(10, 11, 12);
    const convertionDec = decHmsToDegrees(10, 11, 12);
    expect(convertionRa).toBe("152.800");
    expect(convertionDec).toBe("10.187");
  });
  it("should convert the input value of ra in hms to degrees", async () => {
    const wrapper = mount(coordinateSearch);
    const store = useCoordinateStore();
    const radioDegrees = wrapper.find('[data-test="buttonDegrees"]');
    const inputRa = wrapper.get('[data-test="ra"]');
    const inputDec = wrapper.get('[data-test="dec"]');
    inputRa.setValue("10:11:12");
    inputDec.setValue("10:11:12");
    radioDegrees.trigger("click");
    await flushPromises();
    expect(store.ra).toBeCloseTo(152.8, 7);
    expect(store.dec).toBeCloseTo(10.187, 7);
  });
});
