import { useOutletContext } from "react-router-dom";
import NearshoreMoroccoSection from "../../components/NearshoreMorocco";

export default function NearshorePage() {
  const { onBook } = useOutletContext(); // comes from Layout

  return <NearshoreMoroccoSection onBook={onBook} />;
}
