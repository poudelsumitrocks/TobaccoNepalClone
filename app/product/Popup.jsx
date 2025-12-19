import { motion, AnimatePresence } from "framer-motion";
import { LuTag } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function Popup({ category, setCategory, currentCategoryName,setSearch }) {
  const router=useRouter();
  return (
    <AnimatePresence>
      {category && (
        <motion.div
          initial={{ y: -0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div
            className="bg-[#D2863C]/20 text-[#d2863c] text-sm font-medium
            py-2 px-4 rounded-2xl flex gap-2 items-center w-fit "
          >
            <LuTag />
            <p> Category: {currentCategoryName}</p>
            <button
              onClick={() => {
                setCategory("all");
                setSearch("");
                router.push("/product?page=1", { scroll: false });
              }}
            >
              <IoClose className="text-lg cursor-pointer hover:text-[#e4a260] " />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
