import ChallengesList from './ChallengesList.vue';

const mockItems = [
  { title: 'The First Challenge', text: 'Detail one: The default active item.', image: 'https://picsum.photos/650/540?random=1' },
  { title: 'Second Step', text: 'Detail two: Clicking this will change the active state.', image: 'https://picsum.photos/650/540?random=2' },
  { title: 'Third Milestone', text: 'Detail three: This element is currently inactive.', image: 'https://picsum.photos/650/540?random=3' },
];

export default {
  title: 'Components/ChallengesList',
  component: ChallengesList,
  tags: ['autodocs'],
  argTypes: {
  },
};

export const DefaultList = {
  args: {
    title: 'Featured Challenges',
    tag: 'EXPLORE',
    items: mockItems,
  },
};

export const EmptyList = {
  args: {
    title: 'Featured Challenges',
    tag: 'EXPLORE',
    items: [], 
  },
};