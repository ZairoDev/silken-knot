import axios from "axios";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { TagType } from "@/utils/types";
// import { DEFAULT_LIMIT } from "@/constants";
import { Checkbox } from "@/components/ui/checkbox";


interface TagsFilterProps {
  value?: string[] | null;
  onChange: (value: string[]) => void;
}

export const TagsFilter = ({ value, onChange }: TagsFilterProps) => {

  const [data, setData] = useState<TagType[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchTags = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/tags/getAllTags");
      setData(response.data.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Unable to fetch tags");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTags();
  }, []);




  const onClick = (tag: string) => {
    if (value?.includes(tag)) {
      onChange(value?.filter((t) => t !== tag) || [])
    } else {
      onChange([...(value || []), tag]);
    }
  }

  return (
    <div className=" flex flex-col gap-y-2">
      {isLoading ? (
        <div className=" flex items-center justify-center p-4">
          <LoaderIcon className=" size-4 animate-spin" />
        </div>
      ) : (
        data?.map((tag) => (
          <div key={tag._id} className=" flex items-center justify-between cursor-pointer" onClick={() => onClick(tag.name)}>
            <p className=" font-medium">{tag.name}</p>
            <Checkbox checked={value?.includes(tag.name)} onCheckedChange={() => onClick(tag.name)} className=" border border-black" />

          </div>
        ))
      )}


      {/* {hasNextPage && (
        <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()} className=" underline font-medium justify-start text-start disabled:opacity-50 cursor-pointer">
          Load More...
        </button>
      )} */}

    </div>
  )

}