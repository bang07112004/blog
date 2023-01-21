"use client";
import Link from "next/link";

type Props = {};

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return <Link href={route}>{children}</Link>;
}

export default ClientSideRoute;
