import { PersonTabs } from "@/components/PersonTabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PersonTabs slug="howard-hughes" />
      {children}
    </>
  );
}
