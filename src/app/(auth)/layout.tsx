import Image from "next/image";
import WeebookLogo from "~/components/logo";

export const metadata = {
  title: "Weebook - Authenticate",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <div className="relative aspect-video h-full w-full">
        <Image
          src="/auth-bg.jpg"
          alt="Auth Image"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="to-neufrom-neutral-800/60 md:to-neufrom-neutral-800/40 absolute inset-0 bg-gradient-to-t from-neutral-800" />
        <div className="absolute left-8 top-6 z-20">
          <WeebookLogo />
        </div>
      </div>
      <main className="container absolute col-span-1 flex max-w-2xl items-center justify-center px-6 md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
