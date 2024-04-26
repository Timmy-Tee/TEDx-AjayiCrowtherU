function Button(e) {
  return (
    <div className={`lg:${e.desktop} sm:${e.mobile}  flex w-[full]`}>
      <a
        href={e.link}
        className={e.bg ? `${e.bg} p-12-50 rounded-md bg-second-red text-white` : ` bg-second-red p-12-50 rounded-md hover:bg-text-header text-white transition ease-in-out delay-20 cursor-pointer`}
      >
        {e.text}
      </a>
    </div>
  );
}

export default Button;
