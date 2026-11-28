import { MapPin } from "lucide-react";
import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { PRESENCE_PATH, type Region, type RegionalService } from "../data/regions";

type RegionalServiceRouteProps = {
  region: Region;
  service: RegionalService;
  children: ReactNode;
};

/** Shows an existing service page at /services/<service>/<region> with a regional breadcrumb bar. */
function RegionalServiceRoute({ region, service, children }: RegionalServiceRouteProps) {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Our Presence", to: PRESENCE_PATH },
              { label: region.name, to: region.path },
              { label: service.title },
            ]}
            compact
          />
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 md:text-base">
            <MapPin aria-hidden="true" className="h-4 w-4 text-cyan-600" />
            {service.title} in {region.name}
          </p>
        </div>
      </div>
      {children}
    </>
  );
}

export default RegionalServiceRoute;
