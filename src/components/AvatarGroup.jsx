import React from "react";
import { Avatar } from "@material-tailwind/react";

const AvatarGroup = () => {
  return (
    // div element styled using tailwindcss utility classes
    // The following link explains all the different classes that control
    // the display css property - https://tailwindcss.com/docs/display
    <div className="flex w-max items-end gap-4">
      {/* 
        Avatar Component imported from  material-tailwind component library
        The following link explains in detail how to use the avatar component and 
        gives you code suggestions on how you can build up your own custom components
        https://www.material-tailwind.com/docs/react/avatar
      */}
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        size="xs"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        size="sm"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        size="md"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        size="lg"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        size="xl"
      />
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        size="xxl"
      />
    </div>
  );
};

export default AvatarGroup;
