import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host-app',
  remotes: ['auth'],
};

export default config;
