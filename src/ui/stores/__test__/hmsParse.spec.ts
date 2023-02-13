import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { installPinia } from "@/common/installPinia";
import { describe, it, expect } from "vitest";
import { hmsParse } from "@/ui/stores/hmsParse";

installQuasar();
installPinia();

describe("Parse Function", () => {
  it("should parse strings of ra and dec", () => {
    const hmsRa = hmsParse("12:30:49");
    const hmsDec = hmsParse("12:23:28");
    expect(hmsRa).toStrictEqual([12, 30, 49]);
    expect(hmsDec).toStrictEqual([12, 23, 28]);
  });
});
