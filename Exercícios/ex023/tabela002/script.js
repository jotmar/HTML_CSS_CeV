const habitantes = document.querySelectorAll('.habitantes')
const totalHabitantes = document.querySelector('#totalHabitantes')
let total = Number(0)
for (let i = 0; i < habitantes.length; i++) {
  total += Number(habitantes[i].innerHTML)
  console.log(total)
}

totalHabitantes.innerHTML = total
