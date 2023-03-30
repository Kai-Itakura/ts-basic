export default function notExistSample() {
  const name = 'トラハック'
  console.log('noExist sample 1:', typeof name, name)

  if (name) {
    console.log('noExist sample 3:', '吾輩は猫である。名前は' + name)
  } else {
    console.log('noExist sample 2:', '吾輩は猫である。名前はまだ' + name)
  }

  const age = 23
  console.log('noExist sample 4:', typeof age, age)

  if (age) {
    console.log('noExist sample 4:', '年齢は' + age + 'です。')
  } else {
    console.log('noExist sample 4:', '年齢は秘密です')
  }
}
