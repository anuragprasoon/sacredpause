import Trips from "@/components/trip";
import { GetServerSideProps } from "next";

interface DynamicRetreatProps {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  return {
    props: {
      slug,
    },
  };
};

export default function DynamicRetreat({ slug }: DynamicRetreatProps) {
  return (
    <>
      <Trips slug={slug} />
    </>
  );
}