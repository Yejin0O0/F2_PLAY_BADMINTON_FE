"use client";

import ClubCard from "@/components/club/ClubCard";
import { Button } from "@/components/ui/Button";
import { useGetSearchClubs } from "@/lib/api/hooks/clubHook";
import type { ClubCardResponse } from "@/types/clubTypes";
import { SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, isLoading, fetchNextPage, hasNextPage } = useGetSearchClubs(
    12,
    "clubId",
    query,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.pages[0]?.data?.content?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center space-y-4 min-h-[50vh]">
        <SearchX className="h-14 w-14 text-gray-400" aria-hidden="true" />
        <h2 className="text-xl font-medium text-gray-800">검색 결과 없음</h2>
        <p className="text-base text-gray-600 text-center">
          '{query}'에 대한 검색 결과를 찾을 수 없습니다.
        </p>
        <p className="text-base text-gray-600 text-center">
          다른 검색어를 시도해보세요.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            '{query}' 에 대한 검색 결과
          </h2>
        </div>
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.pages.map((group) => (
            <React.Fragment key={group.data?.number_of_elements}>
              {group?.data?.content?.map((club: ClubCardResponse) => (
                <ClubCard key={club.club_token} {...club} />
              ))}
            </React.Fragment>
          ))}
        </div>
        {hasNextPage && (
          <div className="w-full flex justify-center items-center">
            <Button
              type="button"
              onClick={() => fetchNextPage()}
              className="mt-4 px-6 py-2 font-semibold rounded-lg duration-300 shadow-md hover:shadow-lg focus:ring-2"
            >
              더보기
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

export default SearchResult;
