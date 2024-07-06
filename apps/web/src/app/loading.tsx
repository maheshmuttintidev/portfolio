export default function Loading() {
  return (
    <div className="container mx-auto flex flex-col px-3 mt-20 md:mt-3">
      {Array(20)
        .fill(1)
        .map((_, index) => {
          return (
            <div
              className="skeleton-loading h-10 my-2 w-full bg-gradient-to-r dark:from-slate-100 dark:to-slate-500 from-slate-300 to-slate-200 rounded-md"
              key={`skeleton_${index}`}
            ></div>
          );
        })}
    </div>
  );
}
