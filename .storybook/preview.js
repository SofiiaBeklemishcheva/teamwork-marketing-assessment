import { setup } from '@storybook/vue3';
import { h } from 'vue';


setup((app) => {
  app.component('NuxtImg', {
    props: ['src', 'alt', 'width', 'height', 'class'],
    setup(props) {
      return () => h('img', { 
          src: props.src, 
          alt: props.alt, 
          class: props.class,
          width: props.width, 
          height: props.height 
      });
    },
  });

  app.component('BaseIcon', {
      props: ['name', 'class'],
      template: '<div :class="class" style="display: inline-block;">[Icon: {{ name }}]</div>'
  });
});


 @type { import('@storybook/vue3').Preview } */
const preview = {
  
  decorators: [
    (story) => ({
      template: `
        <style>
          /* Wstrzykujemy globalne style z Nuxta */
          @import '@/assets/styles/global.scss';
        </style>
        <div id="story-root">
          <story />
        </div>
      `,
    }),
  ],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;