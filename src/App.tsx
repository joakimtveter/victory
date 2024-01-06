// import StackedBarsCentralAxis from "./charts/StackedBarsCentralAxis.tsx";
import BasicBarChart from "./charts/BasicBarChart.tsx";
import StackedBarChart from "./charts/StackedBarChart.tsx";
import PieChart from "./charts/PieChart.tsx";

function App() {

  return (
    <>
        <h1>Victory charts</h1>
        <p>I am testing out the <a href='https://formidable.com/open-source/victory/'>Victory charts</a> from <a href='https://formidable.com'>Formidable</a></p>
        <section>
            <h2>Basic Bar chart</h2>
            <p>This is a bar chart showing how many babies were born in Norway between 2015 and 2022</p>
            <figure style={{maxWidth: '500px'}}>
                <BasicBarChart />
                <figcaption>Babies born in Norway</figcaption>
            </figure>
        </section>
        <section>
            <h2>Stacked Bar chart</h2>
            <p>This is a stacked bar chart showing how many babies, split into boys and girls, were born in Norway
                between 2015 and 2022</p>
            <figure style={{maxWidth: '500px'}}>
                <StackedBarChart/>
                <figcaption>Babies born in Norway by gender</figcaption>
            </figure>
        </section>
        <section>
            <h2>Pie chart</h2>
            <p>This is a pie chart showing power production in Norway in 2022</p>
            <figure style={{maxWidth: '500px'}}>
                <PieChart/>
                <figcaption>Source of electricity produced in Norway 2022</figcaption>
            </figure>
        </section>
        {/*<StackedBarsCentralAxis />*/}
    </>
  )
}

export default App
