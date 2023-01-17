export async function run() {
  const promiseA = Promise.resolve('A data')
  const promiseB = Promise.reject('B throw an error')

  const data = await Promise.allSettled([promiseA, promiseB])
  console.log('All promises have finished', data)
}

run()
