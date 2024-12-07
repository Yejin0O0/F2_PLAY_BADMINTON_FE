import type { components } from "@/schemas/schema.d.ts"; // generated by openapi-typescript
import type {
  DeleteLeagueData,
  DeleteLeagueParticipantResponse,
  DeleteLeagueResponse,
  GetLeagueCheckResponse,
  GetLeagueDateResponse,
  GetLeagueDetailResponse,
  GetLeagueMonthResponse,
  PatchLeagueRequest,
  PatchLeagueResponse,
  PostLeagueParticipantResponse,
  PostLeagueRequest,
  PostLeagueResponse,
} from "@/types/leagueTypes";
import restClient from "../restClient";

type LeagueParticipationCancelResponse =
  components["schemas"]["LeagueParticipationCancelResponse"];

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const postLeague = async (
  postLeagueData: PostLeagueRequest,
  clubId: string,
): Promise<PostLeagueResponse> => {
  return restClient.post<PostLeagueResponse>(
    `/clubs/${clubId}/leagues`,
    postLeagueData,
  );
};

export const getMonthLeagues = async (
  clubId: string,
  date: string,
): Promise<GetLeagueMonthResponse> => {
  return restClient.get<GetLeagueMonthResponse>(
    `/clubs/${clubId}/leagues/month?date=${date}`,
  );
};

export const getDateLeague = async (
  clubId: string,
  date: string,
): Promise<GetLeagueDateResponse> => {
  return restClient.get<GetLeagueDateResponse>(
    `/clubs/${clubId}/leagues/date?date=${date}`,
  );
};

// TODO: props 타입 분리
export const getLeagueDetail = async (
  clubId: string,
  leagueId: string,
): Promise<GetLeagueDetailResponse> => {
  return restClient.get<GetLeagueDetailResponse>(
    `/clubs/${clubId}/leagues/${leagueId}`,
  );
};

export const getLeagueCheck = async (
  clubId: string,
  leagueId: string,
): Promise<GetLeagueCheckResponse> => {
  return restClient.get<GetLeagueCheckResponse>(
    `/clubs/${clubId}/leagues/${leagueId}/check`,
  );
};

export const postParticipateLeague = async ({
  clubId,
  leagueId,
}: {
  clubId: string;
  leagueId: string;
}): Promise<PostLeagueParticipantResponse> => {
  return restClient.post(`/clubs/${clubId}/leagues/${leagueId}/participation`);
};

export const deleteParticipateLeague = async ({
  clubId,
  leagueId,
}: {
  clubId: string;
  leagueId: string;
}): Promise<DeleteLeagueParticipantResponse> => {
  return restClient.delete(
    `/clubs/${clubId}/leagues/${leagueId}/participation`,
  );
};

export const patchLeague = async (
  leagueData: PatchLeagueRequest,
  clubId: string,
  leagueId: string,
): Promise<PatchLeagueResponse> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/${leagueId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(leagueData),
    },
  );
  if (!response.ok) {
    throw new Error("경기 수정에 실패했습니다.");
  }
  return response.json();
};

export const deleteLeagues = async (
  clubId: string,
  leagueId: string,
): Promise<DeleteLeagueResponse> => {
  return restClient.delete<DeleteLeagueResponse>(
    `/clubs/${clubId}/leagues/${leagueId}`,
  );
};
