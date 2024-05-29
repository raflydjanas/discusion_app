import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SECRET_KEY as string);

export interface DataUser {
  dairy_id?: number;
  content: string | undefined;
  email: string | undefined;
  username?: string | null;
  avatar?: string | undefined;
  created_at?: string;
  comments?: Array<IComments>;
  image?: string | undefined;
  likes?: number | undefined;
}

export interface IComments extends DataUser {
  comments_id: UUID;
}
