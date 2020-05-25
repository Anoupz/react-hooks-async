import { useEffect, useState } from "react";
import axios from "axios";

export const useGiphyApi = (query: string) => {
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query !== "") {
      setLoading(true);
      (async () => {
        try {
          const {
            data: { data },
          } = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=<APIKey>&q=${query}&limit=25&offset=0&rating=G&lang=en`
          );
          setResults(
            data.map(
              (item: { images: { preview: { mp4: string } } }) =>
                item.images.preview.mp4
            )
          );
        } catch (e) {
          setError("Oops!! something wrong with your api");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  return { results, loading, error };
};
