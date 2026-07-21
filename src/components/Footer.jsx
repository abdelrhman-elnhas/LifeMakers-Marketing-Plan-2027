import copy from "../data/copy.json";

export default function Footer() {
  return (
    <footer>
      <p>{copy.footer.note}</p>
    </footer>
  );
}
