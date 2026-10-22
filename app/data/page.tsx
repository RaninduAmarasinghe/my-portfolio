import { redirect } from "next/navigation";

export default function DataPage(): never {
  redirect("/articles");
}
