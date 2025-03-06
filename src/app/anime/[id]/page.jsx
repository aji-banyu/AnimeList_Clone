import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

const Page = async ({params: {id}}) => {

    const anime = await getAnimeResponse(`anime/${id}`, "");
    console.log(anime);

    return (
        <div>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Anggota</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image  
                    src={anime.data.images.webp.image_url} 
                    alt={anime.data.title} 
                    width={200} 
                    height={250} 
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </div>
    )
}

export default Page;