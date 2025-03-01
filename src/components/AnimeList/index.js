import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data.map((anime) => {
                return (
                    <Link key={anime.mal_id} href={`/${anime.mal_id}`} className="cursor-pointer">
                    <Image 
                        src={anime.images.webp.image_url} 
                        alt={anime.title} 
                        width={350} 
                        height={400}  
                        className="w-full max-h-80 object-cover"/>

                    <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                </Link>
                )
            } )}

        </div>
        
    )
}

export default AnimeList;