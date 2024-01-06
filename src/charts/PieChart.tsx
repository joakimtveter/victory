import { VictoryPie} from "victory";

export default function PieChart() {
    const data = [
        {x: "Hydro", y: 12716210},
        {x: "Natural Gas", y: 232797},
        {x: "Wind", y: 1334437},
    ]

    return (
        <svg viewBox="0 0 400 400">
            <VictoryPie
                standalone={false}
                width={400} height={400}
                data={data}
                innerRadius={68} labelRadius={100}
                style={{labels: {fontSize: 20, fill: "white"}}}
            />
        </svg>
    )
}
