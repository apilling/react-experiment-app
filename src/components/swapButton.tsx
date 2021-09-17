import { useState } from "react";


export const SwapButton = ({change}: {change: (text: string) => void}): JSX.Element => {
    const [active, setActive] = useState<boolean>(true);

    const swapper = () => {
        if (active) {
            change("Old Prompt!!");
        } else {
            change("New Prompt!!");
        }
        setActive(!active)
    }

    return <button onClick={() => swapper()}>Swap</button>
} 