// import StackedBarsCentralAxis from "./charts/StackedBarsCentralAxis.tsx";
import BasicBarChart from "./charts/BasicBarChart.tsx";
import StackedBarChart from "./charts/StackedBarChart.tsx";
import PieChart from "./charts/PieChart.tsx";

function App() {

  return (
    <>
        <h1>Victory charts</h1>
        <p>I am testing out the <a href='https://formidable.com'>Victory charts</a> from <a href='https://formidable.com'>Formidable</a></p>
        <section>
            <h2>Bar chart</h2>
            <p>Here is a bar chart</p>
            <BasicBarChart />
            <StackedBarChart />
            <PieChart />
            {/*<StackedBarsCentralAxis />*/}
        </section>
    </>
  )
}

export default App
