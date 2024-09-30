import { ClimbingBoxLoader } from "react-spinners"

export const Loader = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <ClimbingBoxLoader 
                size={30}
                color="#c42e2e"
                loading={true}
                speedMultiplier={1}
            />
        </div>
    )
}
