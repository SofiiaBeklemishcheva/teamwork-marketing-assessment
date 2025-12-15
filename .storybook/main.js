import { mergeConfig } from 'vite';
import { dirname, resolve } from 'path'; 
import vue from '@vitejs/plugin-vue'; 

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  
  stories: [
    "../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  
  async viteFinal(config) {
    return mergeConfig(config, {
      
      plugins: [vue()],

      resolve: {
        alias: {
          '~': resolve(dirname(import.meta.url), '../app'),
          '@': resolve(dirname(import.meta.url), '../app'),
        },
      },
      
      css: {
        preprocessorOptions: {
          scss: {
            includePaths: [
              resolve(dirname(import.meta.url), '../app/assets/styles')
            ],
            additionalData: `@import "@/assets/styles/_variables.scss";` 
          },
        },
      }
    });
  },
};
export default config;