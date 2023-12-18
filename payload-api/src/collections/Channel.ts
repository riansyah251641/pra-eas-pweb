import { CollectionConfig } from "payload/types";

const channel: CollectionConfig = {
  slug: "channel",
  //   auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "channelName", // Corrected field name
      type: "text",
      label: "Nama Channel",
      required: true,
    },
    {
      name: "channelDescription",
      type: "text",
      label: "Deskripsi Group",
      required: true,
    },
  ],
};

export default channel;
