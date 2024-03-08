class App {
  constructor() {
    this.searchResultContainer = document.getElementById('search-result');
    this.searchForm = document.getElementById('search-form');
    this.submitBtn = document.getElementById('submit-btn');
    this.selectDriverType = document.getElementById('select-driver-type');
    this.selectDate = document.getElementById('select-date');

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  async init() {
    await this.load();

    // Register click listener
    this.searchForm.onsubmit = this.handleFormSubmit;
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.searchResultContainer.innerHTML = '';

    const formObj = new FormData(e.target, e.submitter);

    const driverType = formObj.get('driver-type');
    const selectDate = formObj.get('select-date');
    const selectTime = formObj.get('select-time');
    const totalPassanger = formObj.get('total-passanger') || 0;

    const searchResultArr = Car.searchCar(
      driverType,
      selectDate,
      selectTime,
      totalPassanger
    );

    searchResultArr.forEach((car) => {
      const node = document.createElement('div');
      node.className = 'col';
      node.innerHTML = Car.renderFilterCar(car);
      this.searchResultContainer.appendChild(node);
    });
  }
}
