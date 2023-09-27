interface Props {
  imgUrl: string;
  title: string;
}

export function Category({ imgUrl, title }: Props) {
  return (
    <article className="inline-flex flex-col items-center">
      <img
        className="category-img max-w-20 max-h-20 rounded-xl object-cover md:w-32 md:h-32"
        src={imgUrl}
      />
      <h3 className="mt-1 capitalize text-base md:text-lg">{title}</h3>
    </article>
  );
}
