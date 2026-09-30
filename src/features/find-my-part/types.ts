export type Model = {
  name: string;
  /** First and last model year offered (inclusive). */
  years: [number, number];
  engines: string[];
  transmissions: string[];
  drives: string[];
  bodies: string[];
};

export type Make = {
  name: string;
  /** SVG path (24×24 viewBox) of the brand mark; omitted when no mark is available. */
  logoPath?: string;
  models: Model[];
};

export type ConfigKey = "engine" | "transmission" | "drive" | "body" | "market";

export type ConfigField = {
  key: ConfigKey;
  label: string;
  options: string[];
};

export type Config = Record<ConfigKey, string>;
