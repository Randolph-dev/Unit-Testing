class ComputerRegister {
    constructor(jsondata) {
      if (!jsondata) {
        throw new Error('data storage missing!');
      }
      this.data = jsondata;
    }
  
    get_Price(id) {
      const computer = this.data.find(computer=> computer.id === id);
      if (!computer) {
        throw new Error('nothing found with the given search value');
      }
      return computer.price;
    }
  
    has_info(searchKey) {
        if (!searchKey) return false;
        const computer = this.data.find(computer=> computer.id === searchKey);
        return computer && computer.info ? Object.keys(computer.info).length > 0 : false;
      }
  
    get_computer_colors(searchKey) {
      const computer = this.data.find(computer=> computer.id === searchKey);
      return computer ? computer.colors || [] : [];
    }
  
    get_info(searchKey) {
      const computer = this.data.find(computer=> computer.id === searchKey);
      return computer ? computer.info || null : null;
    }
  
    get_total_price_of_computers_by_processor(searchValue) {
      if (!searchValue) {
        throw new Error('missing parameter!');
      }
      const computers = this.data.filter(computer=> computer.processor === searchValue);
      if (computers.length === 0) {
        throw new Error('nothing found with the given search value');
      }
      return computers.reduce((total, computer) => total + computer.price, 0);
    }
  }
  
  module.exports = ComputerRegister;