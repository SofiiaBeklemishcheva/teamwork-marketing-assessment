import ChallengeItem from './ChallengeItem.vue';

export default {
  title: 'Components/ChallengeItem',
  component: ChallengeItem,
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean' },
    imageUrl: { control: 'text' },
    toggle: { action: 'toggled' } 
  },
};

export const Default = {
  args: {
    title: 'Start with a Fresh Approach',
    description: 'This is the description for the default, closed challenge item.',
    isActive: false,
    imageUrl: '',
  },
};

export const Active = {
  args: {
    ...Default.args, 
    isActive: true, 
  },
};

export const WithImage = {
  args: {
    ...Active.args, 
    imageUrl: 'https://picsum.photos/650/540', 
    description: 'This active challenge item contains a description and loads a mobile-specific illustration.',
  },
};