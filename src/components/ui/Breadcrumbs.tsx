import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={index} className={item.current ? "current" : ""}>
            {item.href ? <Link to={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
