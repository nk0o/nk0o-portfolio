import type { Meta, StoryObj } from '@storybook/react';

import { CsLoading } from './CsLoading';

const meta: Meta<typeof CsLoading> = {
  component: CsLoading,
};

export default meta;
type Story = StoryObj<typeof CsLoading>;

export const FirstStory: Story = {
  args: {
    childeren: 'Loading...',
  },
};
