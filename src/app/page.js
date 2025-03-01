import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const topAnime = await response.json();

  return (
    <div>
      {/* Anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>

      {/* Anime terbaru */}
      <section>
        <Header title="Paling Baru" linkHref="/new" linkTitle="Ikuti Sekarang" />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
}

export default Page;
