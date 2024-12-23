import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ title, description, image, href }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-[#CD8B11] shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
        <p className="mb-6 flex-1 text-sm text-white/90">{description}</p>
        <Link
          href={href}
          className="inline-flex w-fit items-center justify-center rounded bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
