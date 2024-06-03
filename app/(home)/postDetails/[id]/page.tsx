import { supabase } from "@/utils/suapbase";
import Image from "next/image";
import DataPostUsrs from "@/components/userComments/DataPostUsrs";

const PostDetails = async ({ params }: { params: { id: number } }) => {
  const { data, error } = await supabase.from("chatting_app").select().eq("id", params.id).single();

  if (error) return <p>Please reload this page...</p>;

  return (
    <main>
      <DataPostUsrs avatar={data.avatar} username={data.username} content={data.content} created_at={data.created_at} likes={data.likes} comments={data.comments} />
      <div className="flex flex-col gap-4 border-b border-slate-600 mt-10">
        {data?.comments?.map((comment: any) => (
          <div key={comment.comment_id} className="ml-4 p-4 bg-base-200">
            <div className="flex items-center gap-3 pb-3">
              <Image src={comment.avatar} alt={comment.avatar} width={40} height={40} className="rounded-full bg-primary " />
              <p>|</p>
              <p>{comment.username || comment.email}</p>
            </div>
            <p className="ml-4">{comment.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PostDetails;
