import { Textarea } from "@/components/ui/shadCnUI/textarea";
import CartUserPost from "@/components/userPost/CartUserPost";
import { createDiaryAction } from "@/actions/actionsCreateContent";
import CreateStatusMobile from "@/components/mobileRedirect/CreateStatusMobile";

export const revalidate = 0;

const ChattingPage = () => {
  return (
    <section className="relative w-full lg:w-[70vh] mx-auto flex flex-col gap-10 ">
      <div className="w-full  border-b border-t border-slate-600 py-3 px-5 hidden sm:block lg:flex gap-9 mb-9">
        <form className="flex items-center gap-2" action={createDiaryAction}>
          <Textarea className="bg-transparent text-slate-300 py-3 px-5 border-none ring-slate-500 w-[40rem]" placeholder="What is happening?!" name="content" />
          <button type="submit" className="flex text-white py-2 px-3 rounded-[0.2rem] gap-3 items-center  font-bold text-3xl">
            {">"}
          </button>
        </form>
      </div>
      <CartUserPost />
      <CreateStatusMobile />
    </section>
  );
};

export default ChattingPage;
