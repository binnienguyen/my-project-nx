import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth',
  exposes: {
    './Module': 'auth/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
