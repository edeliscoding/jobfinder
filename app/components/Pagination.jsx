import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ count, onPageChange, currentPage }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  //   const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  //   const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  //   const handleChangePage = (direction) => {
  //     direction === "prev"
  //       ? params.set("page", parseInt(page) - 1)
  //       : params.set("page", parseInt(page) + 1);
  //     replace(`${pathname}?${params}`);
  //   };
  return (
    <div className="flex justify-between align-center mt-4">
      <button
        className={`${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }  p-2 bg-zinc-500 rounded`}
        disabled={currentPage === 1}
        // onClick={() => handleChangePage("prev")}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <button
        className={`${
          currentPage === count - 1 ? "cursor-not-allowed" : ""
        } p-2 bg-blue-500 rounded`}
        disabled={currentPage === count}
        // onClick={() => handleChangePage("next")}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
