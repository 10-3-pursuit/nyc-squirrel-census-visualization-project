const DropDownMenu = ({ chartType, setChartType }) => {
  const handleTextChange = (e) => {
    setChartType(e.target.value);
  };

  console.log(chartType);

  return (
    <div className="drop-down">
      <form>
        <label htmlFor="chartType">Chart Type: </label>
        <select
          id="chartType"
          value={chartType}
          onChange={handleTextChange}
          required
        >
          {/* <option value="none">Select a Chart</option> */}
          {/* <option value="Bar">Bar Chart</option> */}
          <option value="Pie">Pie Chart</option>
          <option value="Scatter">Scatter Chart</option>
          <option value="Radar">Radar Chart</option>
        </select>
      </form>
    </div>
  );
};

export default DropDownMenu;
