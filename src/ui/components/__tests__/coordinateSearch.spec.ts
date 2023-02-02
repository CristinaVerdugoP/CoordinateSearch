import { mount, flushPromises } from "@vue/test-utils";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { createPinia } from "pinia";
import { describe, it, expect, beforeAll } from "vitest";
import coordinateSearch from "@/ui/components/coordinateSearch.vue";
import { useCoordinateStore } from "@/ui/stores/conesearch";
import { config } from "@vue/test-utils";

installQuasar();
beforeAll(() => {
  const piniaPlugin = createPinia();
  config.global.plugins.unshift(piniaPlugin as Plugin);
});

describe("Store component", () => {
  it("should pass the imputs to the store", async () => {
    const wrapper = mount(coordinateSearch);
    const inputRa = wrapper.get('[data-test="ra"]');
    const inputDec = wrapper.get('[data-test="dec"]');
    const inputRadius = wrapper.get('[data-test="radius"]');
    const inputTargetName = wrapper.get('[data-test="targetName"]');

    inputRa.setValue(2);
    inputDec.setValue(2);
    inputRadius.setValue(2);
    inputTargetName.setValue(2);

    const store = useCoordinateStore();

    expect(store.ra).toBe("2");
    expect(store.dec).toBe("2");
    expect(store.radius).toBe("2");
    expect(store.targetName).toBe("2");
  });
});
