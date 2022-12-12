import { useEffect, useState } from "react";

type Props = {
    duration?: number;
    dynamicProgress?: number;
    progressFinished?: () => void;
};
export function setIntervalWithLimit(callback: (iteration: number) => void, delay: number, repetitions: number) {
    let x = 0;
    const intervalID = window.setInterval(function () {
        callback(x);

        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}
export default function ProgressBar({ duration = 100000, dynamicProgress, progressFinished = () => {} }: Props) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const numberOfIterations = 10;
    const loadingTransitionDuration = duration / numberOfIterations;

    useEffect(() => {
        if (dynamicProgress !== undefined) {
            return;
        }
        const increaseLoadingBar = () => {
            setIntervalWithLimit(
                (iteration: number) => {
                    setLoadingProgress(numberOfIterations * (iteration + 1));
                    if (iteration === numberOfIterations - 1) {
                        // Wait for the duration of the css transition so the event is thrown once the bar is fully filled
                        setTimeout(() => {
                            progressFinished();
                        }, loadingTransitionDuration);
                    }
                },
                loadingTransitionDuration,
                numberOfIterations
            );
        };
        increaseLoadingBar();

        return () => {};
    }, [duration]);

    useEffect(() => {
        if (dynamicProgress !== undefined) {
            setLoadingProgress(dynamicProgress!);
        }
    }, [dynamicProgress]);

    return (
        <div className="bg-custom-background-detail h-[1px] w-full">
            <div
                className="h-[1px] bg-custom-stroke-focus w-full"
                style={{ width: `100%`, transitionDuration: `${loadingTransitionDuration}ms` }}
            />
        </div>
    );
}
