import Image from "next/image";

/** Header'daki logo işareti (diş + B). Yanında klinik adı yazdığı için alt boş. */
export function BrandMark() {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      width={34}
      height={34}
      unoptimized
      priority
      className="size-[30px] shrink-0 sm:size-[34px]"
    />
  );
}
