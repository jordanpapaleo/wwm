const Person = {
  name: PropTypes.string,
  phone: PropTypes.string,
  dob: PropTypes.instanceof(Date)
}

const Counselor = {
  ...person,
  specialty: PropTypes.string,
  rate: PropTypes.number,
  billing: PropTypes.string, // Some sort of notes
}

const Family = {
  type: PropTypes.oneof(['compassion', 'normal'])
}
