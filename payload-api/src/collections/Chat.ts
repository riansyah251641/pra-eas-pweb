import { CollectionConfig } from "payload/types";

const Chat: CollectionConfig = {
  slug: "chat",
  // auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "chat",
      type: "text",
      label: "Chat",
      required: true,
    },
  ],
};

export default Chat;
