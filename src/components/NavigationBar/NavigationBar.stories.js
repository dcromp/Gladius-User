import { NavigationBar } from ".";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    status: {
      options: ["profile", "home", "wallet", "marketplace"],
      control: { type: "select" },
    },
    mode: {
      options: ["dark"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "profile",
    mode: "dark",
    className: {},
  },
};
