import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

type PageBannerProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgroundImages/presence-banner.jpg')" }}
    >
      <div className="absolute inset-0 -z-10 bg-[#0b1538]/75" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:px-12 md:py-26.5">
        <Breadcrumbs items={breadcrumbs} tone="light" className="mb-5" />
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
      </div>
    </section>
  );
}

export default PageBanner;
