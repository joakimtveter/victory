import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack} from "victory";

export default function StackedBarsCentralAxis() {
    const dataBoys = [
        { x: '2012', y: 30933 },
        { x: '2013', y: 30138 },
        { x: '2020', y: 27063 },
        { x: '2019', y: 28042 },
        { x: '2018', y: 28430 },
        { x: '2017', y: 29173 },
        { x: '2016', y: 30386 },
        { x: '2015', y: 30369 },
        { x: '2014', y: 30370 },
        { x: '2021', y: 28684 },
        { x: '2022', y: 26445 },
    ]
    const dataGirls = [
        { x: '2022', y: 25035 },
        { x: '2021', y: 27376 },
        { x: '2020', y: 25916 },
        { x: '2019', y: 26453 },
        { x: '2018', y: 26690 },
        { x: '2017', y: 27460 },
        { x: '2016', y: 28504 },
        { x: '2015', y: 28689 },
        { x: '2014', y: 28714 },
        { x: '2013', y: 28857 },
        { x: '2012', y: 29322 },
    ]
    const height = 400
    const width = 400

    return (
        <div style={{maxWidth: '100%', width: '500px'}}>
            <VictoryChart
                horizontal
                height={height}
                width={width}
                domainPadding={40}
            >
                <VictoryStack
                    style={{ data: { width: 10 }, labels: { fontSize: 10 } }}
                >
                    <VictoryBar
                        style={{ data: { fill: "lightblue" } }}
                        data={dataBoys}
                        y={(year) => (-Math.abs(year.y))}
                        labels={(data) => `${data.y} boys`}
                    />
                    <VictoryBar
                        style={{ data: { fill: "pink" } }}
                        data={dataGirls}
                        y={(year) => (Math.abs(year.y))}
                        labels={({datum}) => (Math.abs(datum.y))}
                    />
                </VictoryStack>

                <VictoryAxis
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fontSize: 15, fill: "black" }
                    }}
                    /*
                      Use a custom tickLabelComponent with
                      an absolutely positioned x value to position
                      your tick labels in the center of the chart. The correct
                      y values are still provided by VictoryAxis for each tick
                    */
                    tickLabelComponent={
                        <VictoryLabel
                            x={width / 2}
                            textAnchor="middle"
                        />
                    }
                    tickValues={dataBoys.map((point) => point.x).reverse()}
                />
            </VictoryChart>
        </div>
    )
}
