import { useTheme } from "../Context/theme";

export default function Card() {
  const { themeMode } = useTheme();

  return (
    <div
      className={`h-[55vh] w-[20vw] flex flex-col gap-2 p-2 shadow-xl rounded-md ${
        themeMode === "light" ? "bg-white" : "bg-slate-800"
      }`}
    >
      <div>
        <img
          src="tiger.jfif"
          alt="tiger"
          className="rounded-sm w-full object-cover select-none"
        />
      </div>

      <div>
        <p
          className={`${
            themeMode === "light" ? "text-black" : "text-[wheat]"
          } text-sm`}
        >
          Tiger is king of jungle
        </p>

        <p
          className="indent-3 mt-2 text-xs"
          style={{ color: themeMode === "light" ? "black" : "white" }}
        >
          White Tiger is a rare color variant of the Bengal Tiger. It is famous
          for its white fur with black or dark brown stripes and blue eyes.
          Despite the name, it is not a separate species or subspecies—it’s a
          genetic variation.
        </p>
      </div>
    </div>
  );
}