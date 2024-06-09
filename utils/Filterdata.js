function Filterdata(searchtext, res) {
    const filterData = res.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    return filterData;
  }
  export default Filterdata;