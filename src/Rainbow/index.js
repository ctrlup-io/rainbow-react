import { rainbowLinearGradient } from "../colors";

export default function Rainbow() {
    return (
        <svg height={0} width={0}>
            <linearGradient id="rainbow">
                {rainbowLinearGradient.map(stop => <stop key={stop[0]} offset={`${stop[0]}%`} stopColor={stop[1]} />)}
            </linearGradient>
        </svg>
    );
}
