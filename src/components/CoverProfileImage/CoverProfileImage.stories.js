import { CoverProfileImage } from ".";
import AvatarPlaceholder from "./img/avatar-placeholder.png";

export default {
  title: "Components/CoverProfileImage",
  component: CoverProfileImage,
};

export const Default = {
  args: {
    className: {},
    imagePlaceholderClassName: {},
    imagePlaceholder: AvatarPlaceholder,
  },
};
