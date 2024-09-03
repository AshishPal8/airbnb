"use client"
import { useRouter } from "next/navigation";
import Button from "./Button";
import Heading from "./Heading";

interface EmptyState {
 title?: string;
 subTitle?: string;
 showReset?: boolean;
}


const EmptyState: React.FC<EmptyState> = ({
    title = "No exact matches",
    subTitle = "Try canging or removing some filters",
    showReset

}) => {
    const router = useRouter()
  return (
    <div className="h-[60vh] flex justify-center items-center flex-col gap-2">
        <Heading center title={title} subtitle={subTitle} />
        <div className="w-48 mt-8">
            {showReset && (
                <Button outline label="Remove all filters"
                onClick={() => router.push("/")}
                />
            )}
        </div>
        </div>
  )
}

export default EmptyState