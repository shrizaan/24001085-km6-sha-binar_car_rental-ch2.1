class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  static searchCar(driverType, selectDate, selectTime, totalPassanger) {
    return Car.list.filter((car) => {
      if (!car.available) {
        return false;
      }

      if (car.capacity < totalPassanger) {
        return false;
      }

      if (selectDate && new Date(car.availableAt) > new Date(selectDate)) {
        return false;
      }

      return true;
    });
  }

  static renderFilterCar(car) {
    return `
      <div class="card h-100 car">
        <img src="${car.image}" class="card-img-top car__image" alt="${car.manufacture}">
        <div class="card-body d-flex flex-column">
          <h6>${car.model} (${car.type})</h6>
          <h5 class="card-title">Rp ${car.rentPerDay} / hari</h5>
          <p class="card-text">${car.description}</p>
          <ul class="mb-5">
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_users.png" alt="total passanger" />
              <p>${car.capacity} orang</p>
            </li>
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_settings.png" alt="total passanger" />
              <p>${car.transmission}</p>
            </li>
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_calendar.png" alt="total passanger" />
              <p>Tahun ${car.year}</p>
            </li>
          </ul>

          <a href="#" class="btn btn-bcr-primary w-100" style="margin-top: auto;">Pilih Mobil</a>
        </div>
      </div>
      `;
  }

  render() {
    return `
      <div class="card h-100 car">
        <img src="${this.image}" class="card-img-top car__image" alt="${this.manufacture}">
        <div class="card-body d-flex flex-column">
          <h6>${this.model} (${this.type})</h6>
          <h5 class="card-title">Rp ${this.rentPerDay} / hari</h5>
          <p class="card-text">${this.description}</p>
          <ul class="mb-5">
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_users.png" alt="total passanger" />
              <p>${this.capacity} orang</p>
            </li>
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_settings.png" alt="total passanger" />
              <p>${this.transmission}</p>
            </li>
            <li class="d-flex">
              <img class="img-fluid" src="./images/fi_calendar.png" alt="total passanger" />
              <p>Tahun ${this.year}</p>
            </li>
          </ul>

          <a href="#" class="btn btn-bcr-primary w-100" style="margin-top: auto;">Pilih Mobil</a>
        </div>
      </div>
      `;
  }
}
