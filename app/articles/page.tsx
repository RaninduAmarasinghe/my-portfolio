import { permanentRedirect } from "next/navigation";

export default function ArticlesPage(): never {
  permanentRedirect("/writing");
}
