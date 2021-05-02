import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["html"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
  },
};
export default config;
