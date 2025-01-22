import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  title: 'Example/Button',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    navLinks : [
      {title:'About Me', link:'/aboutme'},
      {title:'Projects', link:'/projects'},
      {title:'Contact Me', link:'/contactme'},
    ]
  },
};