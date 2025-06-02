import Link from "next/link";

export default function Links({ props }) {
  return <Link href={props.url}>{props.name}</Link>;
}
