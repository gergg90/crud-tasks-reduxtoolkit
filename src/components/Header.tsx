import { CssIcon, HtmlIcon } from "./icons";

function Header() {
  return (
    <div className="mt-12 mb-16">
      <blockquote className="text-2xl font-semibold italic text-center">
        You're the
        <span className="mx-0.5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
          <span className="relative text-slate-950">
            {" "}
            <div className="flex  px-2 gap-1">
              {" "}
              .css
              <CssIcon />{" "}
            </div>{" "}
          </span>
        </span>
        to my
        <span className=" mx-0.5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
          <span className="relative text-slate-950">
            {" "}
            <div className="flex  px-2 gap-1">
              {" "}
              .html
              <HtmlIcon />{" "}
            </div>{" "}
          </span>
        </span>
      </blockquote>
    </div>
  );
}

export default Header;
