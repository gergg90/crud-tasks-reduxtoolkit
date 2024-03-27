function Header() {
  return (
    <div className="my-16">
      <blockquote className="text-2xl font-semibold italic text-center text-white">
        When you look
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
          <span className="relative text-slate-950">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>
    </div>
  );
}

export default Header;
