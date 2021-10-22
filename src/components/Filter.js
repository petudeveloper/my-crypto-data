const Filter = ({ handleSelection }) => (
  <select onChange={(e) => handleSelection(e)} className="Filter">
    <option value="all">All</option>
    <option value="10000000000">1-2 Billion</option>
    <option value="20000000000">2-3 Billion</option>
    <option value="30000000000">3-4 Billion</option>
    <option value="40000000000">4-5 Billion</option>
    <option value="50000000000">5-6 Billion</option>
    <option value="60000000000">6-7 Billion</option>
    <option value="70000000000">7-8 Billion</option>
    <option value="80000000000">8-9 Billion</option>
  </select>
);

export default Filter;
