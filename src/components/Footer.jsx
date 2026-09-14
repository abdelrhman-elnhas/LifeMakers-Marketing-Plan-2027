import copy from "../data/copy.json";

export default function Footer() {
  return (
    <footer style={{maxHeight: "20px", paddingTop: "10px"}}>
      <p>{copy.footer.note}</p>
    </footer>
  );
}
