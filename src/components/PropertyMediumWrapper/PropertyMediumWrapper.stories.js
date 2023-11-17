import { PropertyMediumWrapper } from ".";

export default {
  title: "Components/PropertyMediumWrapper",
  component: PropertyMediumWrapper,
  argTypes: {
    property1: {
      options: ["small", "medium", "big"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "small",
    className: {},
    avatarAvatarClassName: {},
  },
};
