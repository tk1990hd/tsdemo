// src/config/environments.ts

/** Names you support */
export type EnvName = 'dev' | 'preprod';

/** One environment’s shape */
export type EnvConfig = {
  name: EnvName;
  baseURL: string;
  // Optional extras you may need later:
  // apiBase?: string;
  // auth?: { username: string; password: string };
  // flags?: Record<string, boolean>;
};

/** Define all known environments here */
export const ALL_ENVS: Record<EnvName, EnvConfig> = {
  dev: {
    name: 'dev',
    baseURL: 'https://with-bugs.practicesoftwaretesting.com/',
  },
  preprod: {
    name: 'preprod',
    baseURL: 'https://practicesoftwaretesting.com/',
  },
};

/**
 * TOP-LEVEL PICKER
 * Edit this array to choose which environments are active in Playwright.
 * Example:
 *   - ['dev'] only dev
 *   - ['preprod'] only preprod
 *   - ['dev','preprod'] both
 *
 * You can still override via PW_ENVS="dev,preprod" on the CLI if you want.
 */
export const ENABLED_ENVS: EnvName[] = ['dev', 'preprod'];

/** Runtime helper: honor PW_ENVS if present (e.g. PW_ENVS=dev,preprod) */
export function getSelectedEnvs(): EnvConfig[] {
  const fromCli = (process.env.PW_ENVS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean) as EnvName[];

  const chosen = fromCli.length ? fromCli : ENABLED_ENVS;
  return chosen.map((n) => ALL_ENVS[n]);
}
