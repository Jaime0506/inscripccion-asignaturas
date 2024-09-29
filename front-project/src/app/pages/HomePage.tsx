import { Button } from "@nextui-org/button"
import { useAuth } from "../../hooks/useAuth"

export const HomePage = () => {

    const { onLogout } = useAuth()

    const handleOnClick = () => {
        onLogout()
    }

    return (
        <div>
            <Button type="button" onClick={handleOnClick}>
                cerrar sesion
            </Button>
        </div>
        
    )
}
