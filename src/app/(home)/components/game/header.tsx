import memoryGameStore from "../../store/store";
import CountdownTimer from "./countdown-timer";
import GameBackButton from "../game-info/back-button";
import CloseModal from "./modal/close.modal";
import Timer from "@/components/game-timer";

export const GameHeader = () => {
    const {
        startTime,
        hasGameTimer,
        gameTimer,
    } = memoryGameStore();

    return <div className='pb-4 space-y-4'>
        {hasGameTimer ?
            <div>
                <CountdownTimer onComplete={(completed) => {
                    if (completed) {
                    }
                }} time={+gameTimer!} />
            </div>
            :
            <div className='flex justify-between'>
                <p>Started on :  </p>
                <div>
                    <Timer startDate={startTime} />
                </div>
            </div>}
        <div className='items-center gap-4 flex justify-end'>
            <GameBackButton />
            <CloseModal />
        </div>
    </div>
}