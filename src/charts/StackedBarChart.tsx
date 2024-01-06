import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from "victory";

export default function StackedBarChart() {
    const dataBoys = [
        { year: 2015, born: 30369 },
        { year: 2016, born: 30386 },
        { year: 2017, born: 29173 },
        { year: 2018, born: 28430 },
        { year: 2019, born: 28042 },
        { year: 2020, born: 27063 },
        { year: 2021, born: 28684 },
        { year: 2022, born: 26445 },
    ]
    const dataGirls = [
        { year: 2015, born: 28689 },
        { year: 2016, born: 28504 },
        { year: 2017, born: 27460 },
        { year: 2018, born: 26690 },
        { year: 2019, born: 26453 },
        { year: 2020, born: 25916 },
        { year: 2021, born: 27376 },
        { year: 2022, born: 25035 },
    ]

 return (
     <VictoryChart
         theme={VictoryTheme.material}
         domainPadding={15}
     >
            <VictoryAxis
                tickValues={[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]}
                tickFormat={["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x / 1000}k`)}
            />
         <VictoryStack>
            <VictoryBar
                style={{ data: { fill: "cyan" } }}
                data={dataBoys}
                x="year"
                y="born"
            />
             <VictoryBar
                style={{ data: { fill: "hotpink" } }}
                data={dataGirls}
                x="year"
                y="born"
            />
         </VictoryStack>
     </VictoryChart>
 )

}
