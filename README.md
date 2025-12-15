Teamwork Marketing – Front-end Assessment
Challenges List

This project is an implementation of an interactive Challenges List built with Nuxt 3 and the Vue 3 Composition API. The component asynchronously fetches data, displays it using an accordion-style interface, and is fully responsive and accessible via keyboard navigation.

Project Structure

The project follows the standard Nuxt 3 directory structure, extended with additional directories for SCSS styling, Storybook, and Vue composables.

Directories and Files
Path	Description
app/pages/index.vue	Main application page. Uses <Suspense> for asynchronous data loading.
app/composables/useChallenges.js	Vue composable responsible for fetching and processing data from an external API.
app/components/ChallengesList.vue	Parent component containing the accordion interaction logic and keyboard handling.
app/components/ChallengeItem.vue	Child component representing a single accordion item.
app/components/BaseIcon.vue	Component for dynamically loading SVG icons using Nuxt SVG.
app/assets/icons/icon.svg	Example SVG icon (chevron) used by BaseIcon.
app/assets/styles/	Global project styles (variables, mixins, global CSS).
app/components/*.scss	Component-level styles (ChallengesList.scss, ChallengeItem.scss).
Styling and Visual Design

The visual presentation is implemented using SCSS (Sass) combined with a mobile-first approach and Vue’s component-based architecture.

1. Global and Component Styles

SCSS Variables (_variables.scss)
Contains all design tokens such as colors, fonts, font sizes, and spacing values, ensuring visual consistency and easy maintenance.

SCSS Mixins (_mixins.scss)
Provides reusable helpers, including responsive utilities for handling media queries.

Style Architecture
Each main component (ChallengesList.vue, ChallengeItem.vue) imports its own dedicated SCSS file, keeping styles scoped and closely tied to the component logic.

2. Responsiveness

The Challenges List layout is fully responsive across screen sizes:

Layout
On mobile devices, the list spans the full width of the screen.
On larger screens (from min-width: 1024px), the layout switches to a two-column arrangement using Flexbox, with an illustration displayed on the left and the list on the right.

Illustrations

Mobile view:
The illustration associated with a challenge item (imageUrl) is displayed inside the active accordion item (ChallengeItem.vue).

Desktop view:
The illustration is rendered once in the parent component (ChallengesList.vue) and dynamically updated based on the currently active item (activeIndex).

In ChallengeItem.vue, the mobile illustration is hidden for tablet and desktop breakpoints to prevent visual duplication.

Technical Implementation
1. Asynchronous Data Fetching

useChallenges.js (Composable)
Uses Nuxt 3’s built-in useFetch to retrieve data from the provided API endpoint:
https://eoyge3duj7xtdqd.m.pipedream.net

Vue computed properties are used to safely extract and expose relevant data fields (tag, title, items) from the asynchronous response.

Suspense
The <Suspense> component is used in index.vue to improve UX.
While data is loading, a fallback message (“Loading challenges…”) is displayed, and the <ChallengesList> component is rendered once the data is available.

2. Accordion Logic and Interaction

All accordion-related logic is handled in ChallengesList.vue:

activeIndex (ref)
Stores the index of the currently active accordion item. Defaults to 0.

setActive(index)
Toggles the active item. If the currently active item is clicked again, the accordion collapses.

imageIndex (computed)
Reacts to changes in activeIndex and provides the appropriate illustration URL to the <NuxtImg> component.

3. Accessibility and Keyboard Navigation

The project was designed with accessibility (A11y) as a core requirement.

Keyboard Navigation
The entire list (<section class="challenges-container">) listens for keyboard events using @keydown="handleKeydown".

handleKeydown Logic

Handles ArrowUp and ArrowDown keys to navigate cyclically through the list items.

Uses component references to programmatically focus the accordion button of the next or previous item.

Refs and DOM Access

challengeRefs (ref([])) stores references to <ChallengeItem> component instances.

setChallengeRef(el) dynamically populates the references array during v-for rendering.

onBeforeUpdate resets the references before re-rendering to avoid stale references.

ARIA Attributes
The accordion button in ChallengeItem.vue uses:

aria-expanded to indicate whether the section is open

aria-controls to associate the button with its corresponding content region
This ensures proper screen reader support.

Storybook (Development Environment)

Storybook is used to isolate and test components during development.

1. Storybook Configuration
File	Purpose
.storybook/main.js	Configures the Vite bundler, Vue plugin, Nuxt path aliases (@/, ~/), and automatic injection of SCSS variables.
.storybook/preview.js	Global Storybook setup, including style decorators and component mocks.
2. Component Mocking

To allow Storybook to render Nuxt components without running a full Nuxt environment, the following mocks are implemented in preview.js:

<NuxtImg> – replaced with a standard <img /> element.

<BaseIcon> – replaced with a simple placeholder element to avoid SVG loading issues related to Nuxt SVG tooling.

3. Stories

ChallengeItem.stories.js
Defines multiple component states: default, active, and active with an image. Includes interaction testing for accordion toggling.

ChallengesList.stories.js
Defines list-level scenarios, including a default state with mock data and an empty list state.

This implementation focuses on layout fidelity, responsiveness, performance, and accessibility, in line with the evaluation criteria outlined in the assessment brief.
