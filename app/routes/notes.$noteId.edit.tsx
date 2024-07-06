import { ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { loader } from "~/routes/notes.$noteId._index";
import NewNotePage, { action as actionNewNote } from "~/routes/notes.new";

export { loader };
export const action = async (ctx: ActionFunctionArgs) => {
  invariant(ctx.params.noteId, "noteId not found");
  return actionNewNote(ctx);
};

export default function EditNotePage() {
  const data = useLoaderData<typeof loader>();
  return <NewNotePage data={data} />;
}
