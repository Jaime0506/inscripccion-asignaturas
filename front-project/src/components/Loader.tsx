import { CircularProgress } from "@nextui-org/progress"


export const Loader = () => {
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center bg-green-400">
            emote pa todois
            <CircularProgress aria-label="Loading..." color="danger" />
        </div>
    )
}
