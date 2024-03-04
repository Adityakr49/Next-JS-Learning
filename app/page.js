import Link from "next/link";

const HomePage = () => {
  // console.log("home page");
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutoral</h1>
      <Link href="/client" className="btn btn-accent">
        GET STARTED
      </Link>
    </div>
  );
};
export default HomePage;
