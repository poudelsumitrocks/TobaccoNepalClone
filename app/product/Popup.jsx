import { motion, AnimatePresence } from "framer-motion";
import { LuTag } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Popup({
  category,
  setCategory,
  currentCategoryName,

  search,
  setSearch,

  sort,
  setSort,
}) {
  const router = useRouter();

  const showCategory = category !== "all";
  const showSearch = search?.trim() !== "";
  const showSort = sort !== "all";

  return (
    <AnimatePresence>
      {(showCategory || showSearch || showSort) && (
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-4 flex-wrap">

            {/* ✅ CATEGORY POPUP */}
            {showCategory && (
              <PopupChip
                label={`Category: ${currentCategoryName}`}
                onClose={() => {
                  setCategory("all");
                  router.push("/product", { scroll: false });
                }}
              />
            )}

            {/* ✅ SEARCH POPUP */}
            {showSearch && (
              <PopupChip
                label={`Search: "${search}"`}
                onClose={() => {
                  setSearch("");
                  router.push("/product", { scroll: false });
                }}
              />
            )}

            {/* ✅ SORT POPUP */}
            {showSort && (
              <PopupChip
                label={`Sort: ${sort}`}
                onClose={() => {
                  setSort("all");
                  router.push("/product", { scroll: false });
                }}
              />
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


function PopupChip({ label, onClose }) {
  return (
    <div className="bg-[#D2863C]/20 text-[#d2863c] text-sm font-medium py-2 px-4 rounded-2xl flex gap-2 items-center w-fit">
      <LuTag />
      <p>{label}</p>
      <button onClick={onClose}>
        <IoClose className="text-lg cursor-pointer hover:text-[#e4a260]" />
      </button>
    </div>
  );
}
