import { Link } from "react-router-dom";

interface IBreadcrumbProps {
  items: { state: "disabled" | "enabled"; text: string; to: string }[];
}

const Breadcrumb = (props: IBreadcrumbProps) => {
  return (
    <>
      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex overflow-hidden  border border-gray-200 text-gray-600">
          {props.items.map((item, index) => {
            return item.state === "enabled" ? (
              <li className="flex items-center" key={index}>
                <Link
                  to={item.to}
                  className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                >
                  <span className="ms-1.5 text-xs font-medium">
                    {item.text}
                  </span>
                </Link>
              </li>
            ) : (
              <li className="relative flex items-center" key={index}>
                <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                <div className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900">
                  {item.text}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
