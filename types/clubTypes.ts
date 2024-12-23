import type { components } from "@/schemas/schema.d.ts"; // generated by openapi-typescript

export type GetClubListResponse =
  components["schemas"]["CommonResponseCustomPageResponseClubCardResponse"];

export type GetClubListData =
  components["schemas"]["CustomPageResponseClubCardResponse"];

export type GetClubList = components["schemas"]["ClubCardResponse"];

export type GetPopularClubListResponse =
  components["schemas"]["CommonResponseListClubCardResponse"];

export type ClubCardResponse = components["schemas"]["ClubCardResponse"];

export type GetActivityClubListResponse =
  components["schemas"]["CommonResponseListClubCardResponse"];

export type GetRecentlyClubListResponse =
  components["schemas"]["CommonResponseListClubCardResponse"];

export type GetClubDetailsResponse =
  components["schemas"]["CommonResponseClubDetailsResponse"];

export type GetClubDetailData = components["schemas"]["ClubDetailsResponse"];

export type GetClubApplicantsResponse =
  components["schemas"]["CommonResponseCustomPageResponseClubApplicantResponse"];

export type GetClubApplicantsData =
  components["schemas"]["CustomPageResponseClubApplicantResponse"];

export type GetClubApplicants = components["schemas"]["ClubApplicantResponse"];

export type PostClubRequest = components["schemas"]["ClubCreateRequest"];

export type PostClubResponse =
  components["schemas"]["CommonResponseClubCreateResponse"];

export type PostClubData = components["schemas"]["ClubCreateResponse"];

export type PostClubImageResponse =
  components["schemas"]["CommonResponseString"];

export type PatchClubRequest = components["schemas"]["ClubUpdateRequest"];

export type PatchClubResponse =
  components["schemas"]["CommonResponseClubUpdateResponse"];

export type PatchClubData = components["schemas"]["ClubUpdateResponse"];

export type ClubParams = {
  page: number;
  size: number;
  sort: string;
};
