import type { components } from "@/schemas/schema.d.ts"; // generated by openapi-typescript

type LeagueCreateRequest = components["schemas"]["LeagueCreateRequest"];
type LeagueCreateResponse = components["schemas"]["LeagueCreateResponse"];
type MonthLeaguesResponse = components["schemas"]["LeagueReadResponse"];
type LeagueDetailResponse = components["schemas"]["LeagueDetailsResponse"];
type LeagueParticipantResponse =
  components["schemas"]["LeagueParticipantResponse"];
type LeagueParticipationCancelResponse =
  components["schemas"]["LeagueParticipationCancelResponse"];
type LeagueUpdateRequest = components["schemas"]["LeagueUpdateRequest"];
type LeagueUpdateResponse = components["schemas"]["LeagueUpdateResponse"];

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const postLeagues = async (
  leagueData: LeagueCreateRequest,
  clubId: number,
): Promise<LeagueCreateResponse> => {
  const response = await fetch(`${BASE_URL}/clubs/${clubId}/leagues`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(leagueData),
  });
  if (!response.ok) {
    throw new Error("경기 생성에 실패했습니다.");
  }
  return response.json();
};

export const getMonthLeagues = async (
  clubId: number,
  date: string,
): Promise<MonthLeaguesResponse> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/month?date=${date}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  );
  if (!response.ok) {
    throw new Error("리그 정보를 확인할 수 없습니다.");
  }
  return response.json();
};

export const getDateLeagues = async (
  clubId: number,
  date: string,
): Promise<MonthLeaguesResponse[]> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/date?date=${date}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  );
  if (!response.ok) {
    throw new Error("리그 일별 정보를 확인할 수 없습니다.");
  }
  return response.json();
};

export const getLeagueDetail = async (
  clubId: number,
  leagueId: number,
): Promise<LeagueDetailResponse> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/${leagueId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  );
  if (!response.ok) {
    throw new Error("리그 일별 정보를 확인할 수 없습니다.");
  }
  return response.json();
};

export const postParticipateLeague = async (
  clubId: number,
  leagueId: number,
): Promise<LeagueParticipantResponse> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/${leagueId}/participation`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("경기 참여 신청에 실패했습니다. ");
  }

  return response.json();
};

export const deleteParticipateLeague = async (
  clubId: number,
  leagueId: number,
): Promise<LeagueParticipationCancelResponse> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/${leagueId}/participation`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("경기 참여 취소에 실패했습니다. ");
  }

  return response.json();
};

export const patchLeagues = async (
  leagueData: LeagueUpdateRequest,
  clubId: number,
  leagueId: number,
): Promise<LeagueUpdateResponse> => {
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
  clubId: number,
  leagueId: number,
): Promise<string> => {
  const response = await fetch(
    `${BASE_URL}/clubs/${clubId}/leagues/${leagueId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
  );
  if (!response.ok) {
    throw new Error("경기 삭제에 실패했습니다.");
  }
  return response.json();
};
