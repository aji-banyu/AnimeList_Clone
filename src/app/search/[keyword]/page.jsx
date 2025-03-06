import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({params}) => {

  const keyword = params.keyword;

  const decodeKeyword = decodeURI(keyword); // Changed decodeKeyword to decodeURI(keyword)

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`);
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <div>

      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>

    </div>
  );
}

export default Page;

