import { mount, flushPromises } from "@vue/test-utils";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import coordinateSearch from "@/ui/components/coordinateSearch.vue";
import { useCoordinateStore } from "@/ui/stores/conesearch";
import { installPinia } from "@/common/installPinia";
import { setTestType } from "@/app/use-cases/__mocks__/getCoordinates";

installQuasar();
installPinia();

vi.mock("@/app/use-cases/getCoordinates");

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
    store.$reset();
  });
  it("should call resolvename on click", async () => {
    setTestType("success");
    const wrapper = mount(coordinateSearch);
    const inputTargetName = wrapper.get('[data-test="targetName"]');
    inputTargetName.setValue("test target");
    const store = useCoordinateStore();
    const button = wrapper.get('[data-test="resolve"]');
    button.trigger("click");
    await flushPromises();
    expect(store.ra).toBe("1");
    expect(store.dec).toBe("2");
    expect(store.radius).toBe(1.5);
    store.$reset();
  });
  it("should set errror on click", async () => {
    setTestType("error");
    const wrapper = mount(coordinateSearch);
    const inputTargetName = wrapper.get('[data-test="targetName"]');
    inputTargetName.setValue("test target");
    const store = useCoordinateStore();
    const button = wrapper.get('[data-test="resolve"]');
    button.trigger("click");
    await flushPromises();
    expect(store.ra).toBe(-999);
    expect(store.dec).toBe(-999);
    expect(store.radius).toBe("");
    expect(store.error).not.toBeNull();
    store.$reset();
  });
  it("should detect the q-radio buttons ", async () => {
    const wrapper = mount(coordinateSearch);
    const radioHms = wrapper.find('[data-test="buttonHMS"]');
    const radioDegrees = wrapper.find('[data-test="buttonDegrees"]');
    await radioHms.setChecked();
    await radioDegrees.setChecked();
    expect(radioHms.element.checked).toBeTruthy();
    expect(radioDegrees.element.checked).toBeTruthy();
  });
});
