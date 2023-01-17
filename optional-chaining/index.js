const person = {
  name: 'Varayut',
  address: {
    city: 'Bangkok'
  }
}

// const city = person && person.address && person.address.city
const city = person?.address?.city
console.log(city)
