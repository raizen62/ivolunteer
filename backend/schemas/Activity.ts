import { relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Activity = list({
  ui: {
    listView: {
      initialColumns: ["event", "user"],
    },
  },
  fields: {
    event: relationship({ ref: "Event" }),
    user: relationship({ ref: "User.activity" }),
  },
});
