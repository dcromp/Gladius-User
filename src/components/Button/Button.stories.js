import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: [
        "primary-filled",
        "secondary-outlined",
        "primary-outlined",
        "tertiary-filled",
        "tertiary-outlined",
        "secondary-filled",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hasLeftIcon: true,
    hasText: true,
    text: "Button",
    property1: "primary-filled",
    className: {},
    divClassName: {},
  },
};
