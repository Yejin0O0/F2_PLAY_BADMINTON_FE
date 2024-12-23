import ClubIntro from "@/components/pages/club/ClubIntro";
import { getClubsById } from "@/lib/api/functions/clubFn";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ clubId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const clubId = (await params).clubId;

  const club = await getClubsById(clubId);

  if (!club.data) return {};

  return {
    title: club.data.club_name,
    description: club.data.club_description,
    openGraph: {
      images: [club.data.club_image],
    },
  };
}

async function ClubIntroPage({ params }: Props) {
  const clubId = (await params).clubId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["clubsDataById", clubId],
    queryFn: () => getClubsById(clubId),
    staleTime: 1000 * 60 * 1, // stale time은 1분
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClubIntro />
    </HydrationBoundary>
  );
}

export default ClubIntroPage;
