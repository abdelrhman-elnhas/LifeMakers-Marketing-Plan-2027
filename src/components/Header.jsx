import copy from "../data/copy.json";

export default function Header() {
  return (
    <div className="brand-header">
      <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt={copy.logoAlt} />
    </div>
  );
}
