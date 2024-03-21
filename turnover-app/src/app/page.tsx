import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
// import {login} from '~/app/_components/login'
// import {Home} from '~/app/pages/Home'

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    // <Home />
    <>Hii</>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
