import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from "victory";

export default function BasicBarChart() {
    const data = [
        {year: '2015', born: 59058},
        {year: '2016', born: 58890},
        {year: '2017', born: 56633},
        {year: '2018', born: 55120},
        {year: '2019', born: 54495},
        {year: '2020', born: 52979},
        {year: '2021', born: 56060},
        {year: '2022', born: 51480},
    ]

 return (
     <VictoryChart
         theme={VictoryTheme.material}
         domainPadding={10}
     >
            <VictoryBar
            data={data}
            x="year"
            y="born"
            />
            <VictoryAxis
                tickValues={[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]}
                tickFormat={["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x / 1000}k`)}
            />
     </VictoryChart>
 )

}
