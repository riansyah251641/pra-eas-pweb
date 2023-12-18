import { CollectionConfig } from "payload/types";

const Message: CollectionConfig = {
  slug: "message",
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
      label: "Message",
      required: true,
    },
    {
      name: "channelasal",
      type: "text",
      label: "asal channel",
      required: true,
    },
  ],
};

export default Message;
